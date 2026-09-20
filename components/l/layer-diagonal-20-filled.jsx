import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pjjjhmb9z {
  fill: currentColor;
  d: path("M9.447 2.107a1.5 1.5 0 0 1 2.05 1.301L5.42 5.814A2.25 2.25 0 0 0 4 7.906v6.006a1.5 1.5 0 0 1-2-1.414V6.755a2.5 2.5 0 0 1 1.58-2.324zm3 2a1.5 1.5 0 0 1 2.052 1.395v.102L9.264 7.678A2 2 0 0 0 8 9.538v5.98l-.947.375A1.5 1.5 0 0 1 5 14.498V8.416a2 2 0 0 1 1.264-1.86zM18 7.501v6.623a1.5 1.5 0 0 1-.948 1.395l-6 2.376A1.5 1.5 0 0 1 9 16.5V9.877a1.5 1.5 0 0 1 .948-1.394l6-2.377A1.5 1.5 0 0 1 18 7.501");
}
</style><path class="pjjjhmb9z"/>`,
		"fallback": "fluent:layer-diagonal-20-filled",
	});
}

export default Component;
