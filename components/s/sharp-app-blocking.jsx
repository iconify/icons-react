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
		"content": `<style>.kuglf7bgm {
  fill: currentColor;
  d: path("M18 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m-2.5 4A2.5 2.5 0 0 1 18 9.5c.42 0 .8.11 1.15.29l-3.36 3.36c-.18-.35-.29-.73-.29-1.15m2.5 2.5c-.42 0-.8-.11-1.15-.29l3.36-3.36c.18.35.29.73.29 1.15a2.5 2.5 0 0 1-2.5 2.5");
}

.tyqiojb2v {
  fill: currentColor;
  d: path("M19 23v-6h-2v1H7V6h10v1h2V.94L5 1v22z");
}
</style><path class="kuglf7bgm"/><path class="tyqiojb2v"/>`,
		"fallback": "ic:sharp-app-blocking",
	});
}

export default Component;
