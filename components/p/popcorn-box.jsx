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
		"content": `<style>.db5n4obwn {
  d: path("M9.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.hf5a8ebse {
  d: path("M5 9h14l-1.5 11.5h-11Zm4.5 0l.5 11.5M14.5 9L14 20.5");
}

.hvxp8gb1n {
  d: path("M14 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ioe5kn5bp {
  d: path("M5 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hf5a8ebse"/><path class="ioe5kn5bp"/><path class="db5n4obwn"/><path class="hvxp8gb1n"/></g>`,
		"fallback": "uix-sharp:popcorn-box",
	});
}

export default Component;
