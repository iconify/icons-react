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
		"content": `<style>.cu7th4b8q {
  d: path("M2.5 3.5h19v17h-19Zm0 3.75h19m-16.25-2h.01m2.74 0h.01");
}

.hkzyewmko {
  d: path("M6.5 16.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm8.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whoy1jvph {
  d: path("M5 9.75h8v5.75H5Zm8 1.75h3.25l2.25 2.25v1.75H13");
}
</style><g class="ulnmmdpxh"><path class="cu7th4b8q"/><path class="whoy1jvph"/><path class="hkzyewmko"/></g>`,
		"fallback": "uix-sharp:treasury-supplier-portal",
	});
}

export default Component;
