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
		"content": `<style>.eol40eifc {
  d: path("M12 9.75v6.5m-3.75-2.5L9.5 12.5l1.25 1.25m2.5-1.25l1.25 1.25l1.25-1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oj7mcebzz {
  width: 10px;
  height: 9.5px;
  x: 7px;
  y: 8.25px;
  rx: 1.25px;
}

.vl1rc0bvc {
  d: path("M2.75 2.75h18.5m-17 0v18.5m15.5-18.5v18.5m-17 0h18.5M12 2.75V7.5");
}
</style><g class="hntgybcog"><path class="vl1rc0bvc"/><rect class="oj7mcebzz"/><path class="eol40eifc"/></g>`,
		"fallback": "iconoven:lift-shaft",
	});
}

export default Component;
