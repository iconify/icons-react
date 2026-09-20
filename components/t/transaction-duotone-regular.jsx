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
		"content": `<style>.f-7nb_bpw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 4H3v16h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ilm81zbkk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 4h4v16h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jroakeb3a {
  d: path("M17 4h4v16h-4");
}

.l0zc9ibud {
  d: path("M8 10h8");
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rtc4d5stj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 14h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.to02llleg {
  d: path("M7 4H3v16h4");
}

.wog2376vd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 10h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="f-7nb_bpw"/><path class="ilm81zbkk"/><path class="wog2376vd"/><path class="rtc4d5stj"/><path class="to02llleg"/><path class="jroakeb3a"/><path class="l0zc9ibud"/><path class="mvm7r4bea"/></g>`,
		"fallback": "iconmind:transaction-duotone-regular",
	});
}

export default Component;
