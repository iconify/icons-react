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

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.v7smptb1r {
  fill: var(--svg-color--fff, #fff);
  d: path("M11.158 19.723V6.947h3.953c.152 0 .257.123.257.269v7.042c0 .146-.105.27-.25.27h-2.274v5.195c0 .146-.114.277-.265.277h-1.198c-.183-.01-.224-.121-.223-.277m-.842-5.197H8.91a.29.29 0 0 1-.28-.259V7.216c0-.146.129-.269.28-.269h1.405zm0-9.264c0 .693.843 1.263 1.894 1.263s1.895-.57 1.895-1.263c0-.7-.844-1.262-1.895-1.262c-1.05 0-1.894.57-1.894 1.262");
}

.ymfl1o64m {
  fill: var(--svg-color--1e375e, #1e375e);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ymfl1o64m"/><path class="v7smptb1r"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:ppt-background",
	});
}

export default Component;
