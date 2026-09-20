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
		"content": `<style>.e77gki8ci {
  d: path("M2 20V10l3 -3h14l3 3v10");
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

.vlli8wboo {
  d: path("M10.5 11.5 8 14l2.5 2.5");
}

.yt5ezyvwf {
  d: path("M13.5 11.5 16 14l-2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="e77gki8ci"/><path class="mvm7r4bea"/><path class="vlli8wboo"/><path class="yt5ezyvwf"/></g>`,
		"fallback": "iconmind:inventory-sync-outline-regular",
	});
}

export default Component;
