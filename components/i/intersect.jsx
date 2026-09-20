import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ea7iq5l1a {
  fill: currentColor;
  d: path("M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M100.69 136L120 155.31A63.5 63.5 0 0 1 96 160a63.5 63.5 0 0 1 4.69-24m33.75 11.13l-25.57-25.57a64.7 64.7 0 0 1 12.69-12.69l25.57 25.57a64.7 64.7 0 0 1-12.69 12.69M155.31 120L136 100.69A63.5 63.5 0 0 1 160 96a63.5 63.5 0 0 1-4.69 24M32 96a64 64 0 0 1 126-16a80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96m128 128a64.11 64.11 0 0 1-62-48a80.08 80.08 0 0 0 78-78a64 64 0 0 1-16 126");
}
</style><path class="ea7iq5l1a"/>`,
		"fallback": "ph:intersect",
	});
}

export default Component;
