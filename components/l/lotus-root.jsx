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
		"content": `<style>.fzm9jgbfy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M9.5 7q0-2.5 2.5-2.5q1.036 0 1.768.732T14.5 7t-.732 1.768T12 9.5Q9.5 9.5 9.5 7M5 10q0-2.5 2.5-2.5q1.036 0 1.768.732T10 10t-.732 1.768T7.5 12.5Q5 12.5 5 10m11.5-2.5Q19 7.5 19 10t-2.5 2.5T14 10t2.5-2.5M9 13q1.036 0 1.768.732T11.5 15.5t-.732 1.768T9 18q-2.5 0-2.5-2.5T9 13m3.5 2.5q0-2.5 2.5-2.5q1.036 0 1.768.732T17.5 15.5t-.732 1.768T15 18q-2.5 0-2.5-2.5");
}
</style><path class="fzm9jgbfy"/>`,
		"fallback": "uix-solid:lotus-root",
	});
}

export default Component;
