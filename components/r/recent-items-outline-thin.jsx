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
		"content": `<style>.bha7_zvaw {
  d: path("M7 9.5V12");
}

.ctidvybhh {
  d: path("M14 13h7");
}

.ez1_3xbuo {
  d: path("M14 8h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkpmfmxuy {
  d: path("M7 12h2.5");
}

.k-gv_lb9q {
  d: path("M3 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.urdhk5jow {
  d: path("M14 18h5");
}
</style><g class="hntgybcog"><path class="k-gv_lb9q"/><path class="bha7_zvaw"/><path class="jkpmfmxuy"/><path class="ez1_3xbuo"/><path class="ctidvybhh"/><path class="urdhk5jow"/></g>`,
		"fallback": "iconmind:recent-items-outline-thin",
	});
}

export default Component;
