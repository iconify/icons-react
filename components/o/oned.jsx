import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vd8ck4boc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.04 29.78V18.22h2.626c2.82 0 5.106 2.264 5.106 5.058v1.445c0 2.793-2.286 5.057-5.106 5.057zm-10.77-1.613v-4.65a2.83 2.83 0 0 0-2.837-2.818a2.83 2.83 0 0 0-2.838 2.818m0 4.65V20.7m12.891 6.043a2.84 2.84 0 0 1-2.464 1.42a2.826 2.826 0 0 1-2.836-2.815v-1.83a2.826 2.826 0 0 1 2.836-2.815a2.826 2.826 0 0 1 2.836 2.815v.915h-5.672m-9.53 0c0 2.06-1.663 3.73-3.714 3.73a3.72 3.72 0 0 1-3.714-3.73c0-2.06 1.663-3.73 3.714-3.73a3.72 3.72 0 0 1 3.714 3.73");
}

.w65skobvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.362 22.77l.795-.621v4.569");
}

.xm9uzjeuh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24");
}
</style><path class="xm9uzjeuh"/><path class="vd8ck4boc"/><path class="w65skobvw"/>`,
		"fallback": "arcticons:oned",
	});
}

export default Component;
