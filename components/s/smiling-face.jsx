import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fbp0m0b1e {
  fill: var(--svg-color--664e27, #664e27);
}

.kyrv5hb3t {
  cx: 43.5px;
  cy: 24.6px;
  r: 5px;
}

.m5qjw3o7z {
  cx: 20.5px;
  cy: 24.6px;
  r: 5px;
}

.rhvdvboaq {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ffdd67, #ffdd67);
}

.rng3u01-s {
  d: path("M48.1 37c-4.3 6.1-9.5 7.6-16.1 7.6S20.2 43.1 15.9 37c-.6-.8-2.2-.3-1.8.9c2.3 8 10 12.7 18 12.7s15.7-4.7 18-12.7c.2-1.2-1.4-1.7-2-.9");
}
</style><circle class="rhvdvboaq"/><g class="fbp0m0b1e"><circle class="m5qjw3o7z"/><circle class="kyrv5hb3t"/><path class="rng3u01-s"/></g>`,
		"fallback": "emojione:smiling-face",
	});
}

export default Component;
