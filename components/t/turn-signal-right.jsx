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
		"content": `<style>.sl-11mbmp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.794 10.233q1.765 1.767-.001 3.534l-4.348 4.349q-.746.747-1.721.343T13.75 17v-.25q0-.414-.293-.707t-.707-.293h-8.5q-1.036 0-1.768-.732T1.75 13.25v-2.5q0-2.5 2.5-2.5h8.5q.414 0 .707-.293t.293-.707v-.249q-.001-1.056.974-1.46t1.72.343l4.349 4.349z");
}
</style><path class="sl-11mbmp"/>`,
		"fallback": "uix-solid:turn-signal-right",
	});
}

export default Component;
