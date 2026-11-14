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
		"content": `<style>.amwabdbhi {
  d: path("M14.5 2.5v5h6M3.25 14.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.25 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M18 15v6m-3-3h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oq3e8tbho {
  d: path("M16.832 12.5H2.5V4q0-.074.007-.147t.022-.146t.036-.142q.021-.071.049-.139t.063-.133t.076-.126t.087-.119q.047-.057.099-.109t.109-.099q.057-.046.119-.087t.126-.076t.133-.063t.139-.049t.142-.036t.146-.022T4 2.5h10.5l6 5v5h-1.268");
}
</style><g class="hntgybcog"><path class="oq3e8tbho"/><path class="amwabdbhi"/></g>`,
		"fallback": "uix:mobile-vet",
	});
}

export default Component;
