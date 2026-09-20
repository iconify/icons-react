import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sqw5i4-9g {
  fill: currentColor;
  d: path("m253.48 189.56l-64-144A6 6 0 0 0 184 42H72a6 6 0 0 0-5.45 3.51v.14L2.52 189.56A6 6 0 0 0 8 198h240a6 6 0 0 0 5.48-8.44M66 76.27V186H17.23ZM78 186V76.27L126.77 186Zm61.9 0L81.23 54h98.87l58.67 132Z");
}
</style><path class="sqw5i4-9g"/>`,
		"fallback": "ph:tent-light",
	});
}

export default Component;
