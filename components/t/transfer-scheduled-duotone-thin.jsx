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
		"content": `<style>.d27-dpb3f {
  d: path("M9 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.dj4rgmtcm {
  fill: currentColor;
  d: path("M9 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
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

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.rrzohjbez {
  d: path("M12 12v3");
}

.sms0lfbha {
  d: path("M12 15h2.5");
}
</style><g class="hntgybcog"><path class="dj4rgmtcm"/><path class="mcubrkb2y"/><path class="d27-dpb3f"/><path class="rrzohjbez"/><path class="sms0lfbha"/></g>`,
		"fallback": "iconmind:transfer-scheduled-duotone-thin",
	});
}

export default Component;
