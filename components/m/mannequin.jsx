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
		"content": `<style>.ekwvaqb-e {
  width: 2.5px;
  height: 2.75px;
  x: 10.75px;
  y: 2.75px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wtffg6bgh {
  d: path("M8 5.5h8q1 0 1.71.71l.08.08q.71.71.21 1.57l-.75 1.28q-.5.86-1.17 1.6l-.91 1.02q-.67.74-.09 1.55l1.34 1.88Q17 16 16 16H8q-1 0-.42-.81l1.34-1.88q.58-.81-.09-1.55l-.91-1.02q-.67-.74-1.17-1.6L6 7.86q-.5-.86.21-1.57l.08-.08Q7 5.5 8 5.5m4 11v3.25m-3.25 1.5l3.25-1.5l3.25 1.5");
}
</style><g class="hntgybcog"><rect class="ekwvaqb-e"/><path class="wtffg6bgh"/></g>`,
		"fallback": "iconoven:mannequin",
	});
}

export default Component;
