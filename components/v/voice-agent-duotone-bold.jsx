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
		"content": `<style>.coi-np7dk {
  d: path("M15 9v6");
}

.g8p8o_zpi {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hw-0_-irv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k9x_4n_eo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 10v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pst98pbad {
  d: path("M21 10v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vckqcjbbb {
  d: path("M18 5v14");
}

.vkaqsbcfa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9.11 7.47a5 5 0 1 1 -4.22 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yeuzzbchl {
  d: path("M9.11 7.47a5 5 0 1 1 -4.22 0");
}
</style><g class="s0phu2bbs"><path class="vkaqsbcfa"/><path class="hw-0_-irv"/><path class="g8p8o_zpi"/><path class="k9x_4n_eo"/><path class="yeuzzbchl"/><path class="coi-np7dk"/><path class="vckqcjbbb"/><path class="pst98pbad"/></g>`,
		"fallback": "iconmind:voice-agent-duotone-bold",
	});
}

export default Component;
