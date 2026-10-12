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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hueodbcwc {
  width: 7px;
  height: 6px;
  x: 8.5px;
  y: 12px;
  rx: 1.5px;
}

.wo3vhf2ht {
  d: path("M8.5 15h7");
}

.z24r03bhq {
  d: path("m3.6 8.47l7.55-4.69q.85-.53 1.7 0l7.55 4.69q.85.53-.15.53H3.75q-1 0-.15-.53M4.75 12v6.5m14.5-6.5v6.5M2.75 21h18.5");
}
</style><g class="hntgybcog"><path class="z24r03bhq"/><rect class="hueodbcwc"/><path class="wo3vhf2ht"/></g>`,
		"fallback": "iconoven:treasury",
	});
}

export default Component;
