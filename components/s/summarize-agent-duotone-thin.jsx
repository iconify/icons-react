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
		"content": `<style>.fdrbywb2q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 7h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g2-e3wkpa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 17h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ifhv18rgk {
  d: path("M12 12h6");
}

.pi0o-3bfc {
  d: path("M12 7h9");
}

.pxx-spbdi {
  d: path("M7.5 8.83a3.5 3.5 0 1 1 -2.96 0");
}

.sve5l4brn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7.5 8.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t_kadbb9f {
  d: path("M12 17h3");
}

.vku7vnm4c {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="sve5l4brn"/><path class="fdrbywb2q"/><path class="vku7vnm4c"/><path class="g2-e3wkpa"/><path class="pxx-spbdi"/><path class="pi0o-3bfc"/><path class="ifhv18rgk"/><path class="t_kadbb9f"/></g>`,
		"fallback": "iconmind:summarize-agent-duotone-thin",
	});
}

export default Component;
