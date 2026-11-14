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
		"content": `<style>.dr05u3o8z {
  fill: currentColor;
  d: path("M12 6.75za2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5");
}

.eod2xqb5u {
  d: path("M9.5 4L12 2l2.5 2m-5 16l2.5 2l2.5-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysczlu-1u {
  d: path("M12 6.75za2.5 2.5 0 0 1 2.5 2.5v5.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5v-5.5a2.5 2.5 0 0 1 2.5-2.5");
}
</style><g class="hntgybcog"><path class="ysczlu-1u"/><path class="dr05u3o8z"/><path class="eod2xqb5u"/></g>`,
		"fallback": "uix:scrollbar-vertical",
	});
}

export default Component;
