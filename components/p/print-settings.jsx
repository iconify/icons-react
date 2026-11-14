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
		"content": `<style>.epk_oib4j {
  d: path("M5.5 14.5h-1a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-1V12h-7Zm0-7.5V4.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V7");
}

.f56l9lv7w {
  d: path("M5.5 12h7v7.5h-7Zm12.372 3.839l.052-1.038h1.152l.052 1.038l.929.537l.925-.474l.576.997l-.873.564v1.074l.873.564l-.576.997l-.925-.474l-.929.537l-.052 1.038h-1.152l-.052-1.038l-.929-.537l-.925.474l-.576-.997l.873-.564v-1.074l-.873-.564l.576-.997l.925.474Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="epk_oib4j"/><path class="f56l9lv7w"/></g>`,
		"fallback": "uix-sharp:print-settings",
	});
}

export default Component;
