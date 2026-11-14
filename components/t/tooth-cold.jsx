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
		"content": `<style>.f_wrvhssl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.409 13.529l.341-1.279c.5-1.75 1.75-3 1.75-5.5c0-2.25-1-4.25-3.5-4.25c-1.5 0-2.25 1-3.75 1S8 2.5 6.5 2.5C4 2.5 3 4.5 3 6.75c0 2.5 1.25 3.75 1.75 5.5l1 3.75c.25 1.25 1.75 1.25 2 0l.75-2.5c.25-1 3.25-1 3.5 0l.75 2.5c.073.364.252.622.475.774M18.75 16v5.5m-2.5-4.25l5 3m-5 0l5-3");
}
</style><path class="f_wrvhssl"/>`,
		"fallback": "uix-sharp:tooth-cold",
	});
}

export default Component;
