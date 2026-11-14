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

.jefgrcc3u {
  d: path("m14.475 4.725l4.8 4.8a3.5 3.5 0 0 1 0 4.95l-4.8 4.8a3.5 3.5 0 0 1-4.95 0l-4.8-4.8a3.5 3.5 0 0 1 0-4.95l4.8-4.8a3.5 3.5 0 0 1 4.95 0");
}

.pwagb3kcm {
  d: path("m10 9.5l2-2l2 2");
}

.zghbd-bez {
  d: path("M10 15.5v-1l2-2v-5m2 8v-1l-2-2");
}
</style><g class="hntgybcog"><path class="jefgrcc3u"/><path class="zghbd-bez"/><path class="pwagb3kcm"/></g>`,
		"fallback": "uix:two-lanes-merge-sign",
	});
}

export default Component;
