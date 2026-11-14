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
		"content": `<style>.o83cgccrz {
  d: path("M5.25 8.75h2.5v2.5h-2.5Zm5.5 0h2.5v2.5h-2.5Zm5.5 0h2.5v2.5h-2.5Zm1.122 7.089l.052-1.038h1.152l.052 1.038l.929.537l.925-.474l.576.997l-.873.564v1.074l.873.564l-.576.997l-.925-.474l-.929.537l-.052 1.038h-1.152l-.052-1.038l-.929-.537l-.925.474l-.576-.997l.873-.564v-1.074l-.873-.564l.576-.997l.925.474Z");
}

.olu7bmwmr {
  d: path("M12.5 15.5h-10v-11h19v7.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="olu7bmwmr"/><path class="o83cgccrz"/></g>`,
		"fallback": "uix-sharp:network-switch-managed",
	});
}

export default Component;
