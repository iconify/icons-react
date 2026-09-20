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
		"content": `<style>.irxjehbbg {
  fill: currentColor;
  d: path("M6.5 12.5q-.213 0-.356-.144T6 11.999t.144-.356t.356-.143h11q.213 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="irxjehbbg"/>`,
		"fallback": "material-symbols-light:remove-outline-rounded",
	});
}

export default Component;
