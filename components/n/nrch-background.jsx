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

.m-oqq4yhh {
  fill: var(--svg-color--fff, #fff);
  d: path("M8.286 10.285v-4.61A1.685 1.685 0 0 1 9.989 4h9.724v1.183a1.73 1.73 0 0 1-1.748 1.674h-5.828a.416.416 0 0 0-.423.411v3.017H18v1.212a1.676 1.676 0 0 1-1.702 1.645H5.989a1.677 1.677 0 0 1-1.703-1.645v-1.212zm3.428 4.572v1.783c0 .28.229.503.498.503h5.793a1.715 1.715 0 0 1 1.709 1.726v1.13h-9.72a1.715 1.715 0 0 1-1.708-1.725v-3.417z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.uyvzn5odo {
  fill: var(--svg-color--00e9b3, #00e9b3);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="uyvzn5odo"/><path class="m-oqq4yhh"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:nrch-background",
	});
}

export default Component;
