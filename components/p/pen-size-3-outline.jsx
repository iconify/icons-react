import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hylzzpbii {
  fill: currentColor;
  d: path("M5.45 18.55q-.425-.425-.425-1.05t.425-1.05l11-11q.425-.45 1.05-.438t1.05.438t.438 1.05t-.438 1.05l-11 11q-.425.425-1.05.438t-1.05-.438");
}
</style><path class="hylzzpbii"/>`,
		"fallback": "material-symbols:pen-size-3-outline",
	});
}

export default Component;
