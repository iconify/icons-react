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
		"content": `<style>.dvrab6bph {
  d: path("M3 15a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iile52bem {
  d: path("M6 8a6 6 0 0 1 12 0");
}

.jotk81b5q {
  d: path("M12 2v6");
}

.xslfg2evh {
  d: path("M6 21h12");
}

.z5kmxjbqj {
  fill: currentColor;
  d: path("M3 15a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="z5kmxjbqj"/><path class="iile52bem"/><path class="jotk81b5q"/><path class="dvrab6bph"/><path class="xslfg2evh"/></g>`,
		"fallback": "iconmind:operating-room-duotone-thin",
	});
}

export default Component;
