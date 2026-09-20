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
		"content": `<style>.uq-7xib1k {
  fill: currentColor;
  d: path("M5 18.77v-1h1.616V9.845q0-1.96 1.24-3.447T11 4.546V3h2v1.546q1.904.366 3.144 1.853t1.24 3.447v7.923H19v1zm6.997 2.615q-.668 0-1.14-.475t-.472-1.14h3.23q0 .67-.475 1.142q-.476.472-1.143.472m-.497-8.576h1V8h-1zm.5 2.807q.262 0 .439-.181t.176-.434t-.177-.434t-.438-.182t-.438.182t-.177.434t.177.434t.438.182");
}
</style><path class="uq-7xib1k"/>`,
		"fallback": "material-symbols-light:notification-important-sharp",
	});
}

export default Component;
