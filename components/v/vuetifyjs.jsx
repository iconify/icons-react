import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":222};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d4y5f2bst {
  fill: var(--svg-color--1867c0, #1867c0);
  d: path("M159.308 0C183.503 79.623 128 221.754 128 221.754l-48.332-83.762z");
}

.jd76clsea {
  fill: var(--svg-color--7bc6ff, #7bc6ff);
  d: path("M134.734 0C32.794 0 67.367 116.708 67.367 116.708z");
}

.tdw600bwc {
  fill: var(--svg-color--1697f6, #1697f6);
  d: path("m130.711 49.564l-51.043 88.428L128 221.754l64.015-110.877L256 0h-96.692z");
}

.uhq8wacxu {
  fill: var(--svg-color--aeddff, #aeddff);
  d: path("m64.015 110.877l3.352 5.831l47.748-82.742L134.734 0H0z");
}
</style><path class="tdw600bwc"/><path class="uhq8wacxu"/><path class="d4y5f2bst"/><path class="jd76clsea"/>`,
		"fallback": "logos:vuetifyjs",
	});
}

export default Component;
