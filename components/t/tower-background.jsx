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

.kwwpnt-9r {
  fill: var(--svg-color--fff, #fff);
  d: path("m15.765 4l-.28 1.412h-2.212L12.941 4H11.06l-.251 1.412H8.515L8.28 4H6.353l.47 4.235h10.354L17.647 4zM6.824 8.706l.687 7.34L11.992 20l.008-.045l.008.045l4.482-3.954l.687-7.34zm1.411 1.882h2.824v6.824l-2.353-2.118zm4.706 6.824v-6.824h2.824l-.47 4.706z");
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="kwwpnt-9r"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:tower-background",
	});
}

export default Component;
