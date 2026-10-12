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
		"content": `<style>.bfo0bhbkc {
  cx: 7px;
  cy: 12px;
  r: 1.1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mk3bucb2v {
  d: path("m15.28 7.79l.74.78q.28.29.68.28l1.08-.02q.4-.01.39.39l-.02 1.08q-.01.4.28.68l.78.74q.29.28 0 .56l-.78.74q-.29.28-.28.68l.02 1.08q.01.4-.39.39l-1.08-.02q-.4-.01-.68.28l-.74.78q-.28.29-.56 0l-.74-.78q-.28-.29-.68-.28l-1.08.02q-.4.01-.39-.39l.02-1.08q.01-.4-.28-.68l-.78-.74q-.29-.28 0-.56l.78-.74q.29-.28.28-.68l-.02-1.08q-.01-.4.39-.39l1.08.02q.4.01.68-.28l.74-.78q.28-.29.56 0m-1.53 5.71l2.5-3");
}

.qnq0mhbyd {
  d: path("M8.66 5.75h10.59a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H8.66a2 2 0 0 1-1.48-.66l-3.86-4.25a2 2 0 0 1 0-2.68l3.86-4.25a2 2 0 0 1 1.48-.66");
}
</style><g class="hntgybcog"><path class="qnq0mhbyd"/><circle class="bfo0bhbkc"/><path class="mk3bucb2v"/></g>`,
		"fallback": "iconoven:sale-burst",
	});
}

export default Component;
