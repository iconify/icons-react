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
		"content": `<style>.bdi3f-b4t {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.02 11.721H4l5.28-2.453L11.726 4l.006 5.005a2.714 2.714 0 0 1-2.713 2.718zm5.96 0H20l-5.28-2.453L12.274 4l-.006 5.005a2.714 2.714 0 0 0 2.713 2.718zm0 .558H20l-5.28 2.453L12.274 20l-.006-5.005a2.714 2.714 0 0 1 2.713-2.718zm-5.96 0H4l5.28 2.453L11.726 20l.006-5.005a2.714 2.714 0 0 0-2.713-2.718z");
}

.ft5dv1b6b {
  fill: none;
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="bdi3f-b4t"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:lumia-background",
	});
}

export default Component;
