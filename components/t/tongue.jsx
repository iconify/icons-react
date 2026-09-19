import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a9c-hjbxx {
  fill: var(--svg-color--89029c, #89029C);
  d: path("M30 7c0 7.73-6.27 14-14 14S2 14.73 2 7z");
}

.ft5dv1b6b {
  fill: none;
}

.v9ez_ybzt {
  fill: var(--svg-color--f92f60, #F92F60);
  d: path("M19.313 12.063h-6.5c-1.079 0-4.797.593-4.797 2.906v7.969C8.016 25.344 10.063 30 16 30c5.938 0 8-4.656 8-7.062v-7.97c0-2.155-3.156-2.905-4.687-2.905");
}
</style><g class="ft5dv1b6b"><path class="a9c-hjbxx"/><path class="v9ez_ybzt"/></g>`,
		"fallback": "fluent-emoji:tongue",
	});
}

export default Component;
