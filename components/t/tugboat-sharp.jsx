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
		"content": `<style>.cfzpejbnz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 12.25v-3H8.5v-4h5v8H5.75zm4.75-4.5h1m4.75 5.5v-7m-1.5 2h3");
}

.pz5vapi5e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 13.25H17l.35-.94l.05-.12l.35-.94h3.5l-.23.97l-1.29 5.56l-.23.97H5l-.38-.93l-1.49-3.64l-.38-.93z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wynnj3b6j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 16h.01m3.99 0h.01");
}
</style><g class="ux2u0rbkq"><path class="cfzpejbnz"/><path class="pz5vapi5e"/><path class="wynnj3b6j"/></g>`,
		"fallback": "iconoven:tugboat-sharp",
	});
}

export default Component;
