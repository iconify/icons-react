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
		"content": `<style>.tdthv3bcv {
  fill: currentColor;
  d: path("M5.5 5q-.213 0-.356-.144T5 4.499t.144-.356T5.5 4h13q.213 0 .356.144t.144.357t-.144.356T18.5 5z");
}
</style><path class="tdthv3bcv"/>`,
		"fallback": "material-symbols-light:maximize-rounded",
	});
}

export default Component;
