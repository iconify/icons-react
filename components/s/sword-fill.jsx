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
		"content": `<style>.q4yy0gq-g {
  fill: currentColor;
  d: path("m7.086 15.5l-2.793-2.793a.999.999 0 1 1 1.414-1.414L7 12.586l9.293-9.293C17.008 2.578 17.961 2 19 2h2a1 1 0 0 1 1 1v2c0 1.039-.578 1.992-1.293 2.707L11.414 17l1.293 1.293a.999.999 0 1 1-1.414 1.414L8.5 16.914L5.414 20l.293.293a.999.999 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 1.414-1.414l.293.293Z");
}
</style><path class="q4yy0gq-g"/>`,
		"fallback": "coolicons:sword-fill",
	});
}

export default Component;
