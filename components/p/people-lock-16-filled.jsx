import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.os58l-ble {
  fill: currentColor;
  d: path("M12.5 7a2 2 0 0 1 2 2v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5V9a2 2 0 0 1 2-2m0 5.25a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M7.5 8c.792 0 1.474.46 1.798 1.128A2 2 0 0 0 8 11v1.28c-.808.466-1.867.72-3 .72c-1.175 0-2.27-.272-3.089-.77C1.091 11.73.5 10.965.5 10a2 2 0 0 1 2-2zm5 0a1 1 0 0 0-1 1v1h2V9a1 1 0 0 0-1-1M5 1.5A2.75 2.75 0 1 1 5 7a2.75 2.75 0 0 1 0-5.5m7.002.997a2.25 2.25 0 0 1 2.252 2.251a2.24 2.24 0 0 1-.571 1.494a2.99 2.99 0 0 0-2.97.35a2.251 2.251 0 0 1 1.288-4.096");
}
</style><path class="os58l-ble"/>`,
		"fallback": "fluent:people-lock-16-filled",
	});
}

export default Component;
