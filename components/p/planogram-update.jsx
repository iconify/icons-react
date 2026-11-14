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
		"content": `<style>.k9f0qzqhp {
  d: path("m15.75 12.5l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzzlv23pb {
  d: path("M5 5.5h5v4H5Zm9.8 4H13v-4h5v4h-1.3M5 11.25h5v4H5Zm8 .1v-.1h.1M5 17h5v4H5Zm15.781-.75a3.5 3.5 0 1 1-3.031-1.75");
}

.xb-lq1b_a {
  d: path("M12.2 21H2.5V3h19v9.6m-19-3.1h12.3m1.9 0h4.8m-19 5.75h9.6");
}
</style><g class="ulnmmdpxh"><path class="xb-lq1b_a"/><path class="wzzlv23pb"/><path class="k9f0qzqhp"/></g>`,
		"fallback": "uix-sharp:planogram-update",
	});
}

export default Component;
