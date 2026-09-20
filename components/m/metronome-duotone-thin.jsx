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

.kmfi7db8w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 11h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lhxa_-oki {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20c1 -7 4 -14 6 -17h4c2 3 5 10 6 17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mokr9feot {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 7v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.oio7uh0en {
  d: path("M10 11h4");
}

.wgokw4bbc {
  d: path("M4 20c1 -7 4 -14 6 -17h4c2 3 5 10 6 17");
}

.x5li7lwaz {
  d: path("M12 7v12");
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="lhxa_-oki"/><path class="yu-j7jb_g"/><path class="mokr9feot"/><path class="kmfi7db8w"/><path class="wgokw4bbc"/><path class="oifr9zbpt"/><path class="x5li7lwaz"/><path class="oio7uh0en"/></g>`,
		"fallback": "iconmind:metronome-duotone-thin",
	});
}

export default Component;
