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
		"content": `<style>.t4z0ojbmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.129 9.197za2 2 0 0 1 2.372 1.54l1.039 4.891A2 2 0 0 1 6 18a2 2 0 0 1-2.372-1.54l-1.04-4.891a2 2 0 0 1 1.541-2.372m6.916 1.956za2 2 0 0 1 2.372 1.54l.623 2.935A2 2 0 0 1 12.5 18a2 2 0 0 1-2.372-1.54l-.624-2.935a2 2 0 0 1 1.541-2.372m5.148-6.358za2 2 0 0 1 2.372 1.54l1.975 9.293A2 2 0 0 1 19 18a2 2 0 0 1-2.372-1.54l-1.975-9.293a2 2 0 0 1 1.54-2.372M2.5 21h19");
}
</style><path class="t4z0ojbmq"/>`,
		"fallback": "uix:pedals",
	});
}

export default Component;
