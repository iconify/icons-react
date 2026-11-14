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
		"content": `<style>.dprl56bws {
  d: path("M18 16v2l1.5 1");
}

.msw8e_b6b {
  d: path("M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zw-zzobji {
  d: path("M12.8 21.5H5v-19h14v9.3M5 7.5h14M8 11h8m-8 3.5h4.5M8 18h3");
}
</style><g class="ulnmmdpxh"><path class="zw-zzobji"/><path class="msw8e_b6b"/><path class="dprl56bws"/></g>`,
		"fallback": "uix-sharp:punch-clock",
	});
}

export default Component;
