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
		"content": `<style>.b-wcvrxeo {
  d: path("M7.5 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h4.75M13.5 8v2m2.75-2v1.1M8 13.5h4.8M8 17h3.2m9.331-1a3.5 3.5 0 1 1-3.031-1.75");
}

.m838ucczp {
  d: path("m15.5 12.25l2 2l-2 2");
}

.tmyew7bto {
  d: path("M12.4 21.5H4.5v-19h15v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tmyew7bto"/><path class="b-wcvrxeo"/><path class="m838ucczp"/></g>`,
		"fallback": "uix-sharp:lease-renewal",
	});
}

export default Component;
