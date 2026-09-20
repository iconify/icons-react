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
		"content": `<style>.fateippjw {
  fill: currentColor;
  d: path("M7 20q-.213 0-.356-.144t-.144-.357t.144-.356T7 19h10q.213 0 .356.144t.144.357t-.144.356T17 20z");
}
</style><path class="fateippjw"/>`,
		"fallback": "material-symbols-light:minimize-outline-rounded",
	});
}

export default Component;
