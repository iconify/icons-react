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
		"content": `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-bgls0gn {
  d: path("m9 15 4.5 -4.5");
}
</style><g class="hntgybcog"><path class="b5ic9acln"/><path class="ae0h5kb0o"/><path class="j-bgls0gn"/></g>`,
		"fallback": "iconmind:similarity-cosine-outline-thin",
	});
}

export default Component;
