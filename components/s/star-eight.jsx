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
		"content": `<style>.febf0ib8f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.41 3.2l1.38 2.69q.41.8 1.27.52l2.87-.92q.86-.28.58.58l-.92 2.87q-.28.86.52 1.27l2.69 1.38q.8.41 0 .82l-2.69 1.38q-.8.41-.52 1.27l.92 2.87q.28.86-.58.58l-2.87-.92q-.86-.28-1.27.52l-1.38 2.69q-.41.8-.82 0l-1.38-2.69q-.41-.8-1.27-.52l-2.87.92q-.86.28-.58-.58l.92-2.87q.28-.86-.52-1.27L3.2 12.41q-.8-.41 0-.82l2.69-1.38q.8-.41.52-1.27l-.92-2.87q-.28-.86.58-.58l2.87.92q.86.28 1.27-.52l1.38-2.69q.41-.8.82 0");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="febf0ib8f"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:star-eight",
	});
}

export default Component;
