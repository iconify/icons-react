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

.ngx0bsb5w {
  d: path("M8.5 15.5 13 11");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.oxy-4pqdz {
  d: path("M10.5 9H15v4.5");
}
</style><g class="hntgybcog"><path class="o_ssmh9ez"/><path class="ngx0bsb5w"/><path class="oxy-4pqdz"/></g>`,
		"fallback": "iconmind:send-outline-thin",
	});
}

export default Component;
