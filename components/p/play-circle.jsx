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
		"content": `<style>.kmfg496ob {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752m7.996 4.179l1.796 1.197q1.002.668 1.002 1.872t-1.002 1.872l-1.796 1.197q-1.121.748-2.31.112q-1.188-.636-1.188-1.984v-2.394q0-1.348 1.188-1.984q1.189-.636 2.31.112");
}
</style><path class="kmfg496ob"/>`,
		"fallback": "uix-solid:play-circle",
	});
}

export default Component;
