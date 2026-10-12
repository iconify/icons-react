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
		"content": `<style>.f7p6sm1ap {
  d: path("M3.75 20.25V13q0-.5.5-.5h1.5q.5 0 .5.5v.5q0 .5.5.5H8q.5 0 .5-.5v-5q0-.5.5-.5h6q.5 0 .5.5v5q0 .5.5.5h1.25q.5 0 .5-.5V13q0-.5.5-.5h1.5q.5 0 .5.5v7.25q0 .5-.5.5H4.25q-.5 0-.5-.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uo5xpqbxa {
  d: path("M10.5 20.75v-2.5a1.5 1.5 0 0 1 3 0v2.5M12 8V2.75l3.25 1.4L12 5.5");
}
</style><g class="hntgybcog"><path class="f7p6sm1ap"/><path class="uo5xpqbxa"/></g>`,
		"fallback": "iconoven:sandcastle",
	});
}

export default Component;
