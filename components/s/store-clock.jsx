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
		"content": `<style>.kyezsdids {
  d: path("M4.5 9.5v11h6.9m8.1-9.5V9.5m-6 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.sna-v8b8p {
  d: path("m3 7l1.5-4.5h15L21 7a3 3 0 0 1-6 0a3 3 0 0 1-6 0a3 3 0 0 1-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wti3g3byz {
  d: path("M17.5 15.5v2l1.5 1");
}
</style><g class="ulnmmdpxh"><path class="sna-v8b8p"/><path class="kyezsdids"/><path class="wti3g3byz"/></g>`,
		"fallback": "uix-sharp:store-clock",
	});
}

export default Component;
