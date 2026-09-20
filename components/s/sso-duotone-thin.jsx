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
		"content": `<style>.b0jxq8rov {
  d: path("M15 4a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.bfl7ipbld {
  d: path("M8 12h4V6h3");
}

.c-3brkbrv {
  fill: currentColor;
  d: path("M15 16a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e1-kupvjo {
  d: path("M12 12v6h3");
}

.fiap06mao {
  d: path("M15 16a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.gbko01wam {
  fill: currentColor;
  d: path("M15 4a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hvxngl_cs {
  d: path("M2 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.mfoq47b3b {
  fill: currentColor;
  d: path("M2 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="mfoq47b3b"/><path class="gbko01wam"/><path class="c-3brkbrv"/><path class="hvxngl_cs"/><path class="bfl7ipbld"/><path class="e1-kupvjo"/><path class="b0jxq8rov"/><path class="fiap06mao"/></g>`,
		"fallback": "iconmind:sso-duotone-thin",
	});
}

export default Component;
