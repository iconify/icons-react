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
		"content": `<style>.f61y-nmdv {
  fill: currentColor;
  d: path("m12 10.41l3.29-3.29a.996.996 0 1 0-1.41-1.41L12 7.59V5c0-.55-.45-1-1-1s-1 .45-1 1v2.59L8.12 5.71a.996.996 0 1 0-1.41 1.41L10 10.41V12H8.41L5.12 8.71a.996.996 0 1 0-1.41 1.41L5.59 12H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59l-1.88 1.88a.996.996 0 1 0 1.41 1.41L8.41 14H10v1.59l-3.29 3.29a.996.996 0 1 0 1.41 1.41L10 18.41V21c0 .55.45 1 1 1s1-.45 1-1v-2.59l1.88 1.88a.996.996 0 1 0 1.41-1.41L12 15.59V14h1.59l3.29 3.29a.996.996 0 1 0 1.41-1.41L16.41 14H19c.55 0 1-.45 1-1s-.45-1-1-1h-7z");
}

.fu2vv6bvy {
  cx: 20px;
  cy: 9px;
  r: 1px;
  fill: currentColor;
}

.ygtr4nagv {
  fill: currentColor;
  d: path("M20 2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1");
}
</style><path class="ygtr4nagv"/><circle class="fu2vv6bvy"/><path class="f61y-nmdv"/>`,
		"fallback": "ic:round-severe-cold",
	});
}

export default Component;
