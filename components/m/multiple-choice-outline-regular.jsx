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
		"content": `<style>.du3agkbjb {
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.f8c172gmh {
  d: path("M12 6h9");
}

.kl9vv3e1t {
  d: path("M12 18h6");
}

.n-059ea3n {
  d: path("M5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tt7ypiikb {
  d: path("M5 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zrdou8b0n {
  d: path("M12 12h9");
}
</style><g class="nrj6p8qat"><path class="tt7ypiikb"/><path class="n-059ea3n"/><path class="du3agkbjb"/><path class="f8c172gmh"/><path class="zrdou8b0n"/><path class="kl9vv3e1t"/></g>`,
		"fallback": "iconmind:multiple-choice-outline-regular",
	});
}

export default Component;
