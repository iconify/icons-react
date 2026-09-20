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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.g8fjy9ghk {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.808 17.054h5.382L12 9.642L9.309 14.4c-.666 1.179.168 2.653 1.499 2.653");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.qjnhwibkx {
  fill: var(--svg-color--002f81, #002f81);
  d: path("M24 0H0v24h24z");
}

.r_whqqbzx {
  fill: var(--svg-color--fff, #fff);
  d: path("M7.734 7.916a1.878 1.878 0 0 1 3.289 0l5.168 9.14H5.957c-1.504 0-2.443-1.664-1.694-2.995z");
}

.tdltybc1u {
  fill: var(--svg-color--fff, #fff);
  d: path("M16.266 7.916a1.878 1.878 0 0 0-3.29 0l-3.663 6.486c-.67 1.18.164 2.653 1.495 2.653h7.236c1.503 0 2.442-1.663 1.693-2.994z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="qjnhwibkx"/><path class="r_whqqbzx"/><path class="tdltybc1u"/><path class="g8fjy9ghk"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:mx-background",
	});
}

export default Component;
