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
		"content": `<style>.a78831x8h {
  d: path("M2 5h6l4 4");
}

.eimg1ibhu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jm_ntdbid {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 5h6l4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l517yxbln {
  d: path("M12 9v6");
}

.lg40ofb3n {
  d: path("M2 19h6l4 -4");
}

.rzfubwb2e {
  d: path("M12 12h10");
}

.sz5he4mqt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vhdygzbly {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 19h6l4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="jm_ntdbid"/><path class="vhdygzbly"/><path class="eimg1ibhu"/><path class="sz5he4mqt"/><path class="a78831x8h"/><path class="lg40ofb3n"/><path class="l517yxbln"/><path class="rzfubwb2e"/></g>`,
		"fallback": "iconmind:quic-duotone-thin",
	});
}

export default Component;
