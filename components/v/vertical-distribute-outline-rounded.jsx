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
		"content": `<style>.ra92icbcs {
  fill: currentColor;
  d: path("M3.5 21q-.213 0-.356-.144T3 20.499t.144-.356T3.5 20h17q.213 0 .356.144t.144.357t-.144.356T20.5 21zm5-8q-.417 0-.708-.291q-.292-.291-.292-.707t.292-.709T8.5 11h7q.417 0 .708.291q.292.291.292.707t-.292.709T15.5 13zm-5-9q-.213 0-.356-.144T3 3.499t.144-.356T3.5 3h17q.213 0 .356.144t.144.357t-.144.356T20.5 4z");
}
</style><path class="ra92icbcs"/>`,
		"fallback": "material-symbols-light:vertical-distribute-outline-rounded",
	});
}

export default Component;
