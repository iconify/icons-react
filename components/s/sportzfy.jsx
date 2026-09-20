import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rn07uccio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.262 3.515v16.096s-7.094-7.552-9.84-2.441s8.99 11.576 7.17 17.622c-2.136 7.094-8.62 9.001-15.714 6.941l-3.89-17.712c10.076 10.076 12.155 8.364 12.586 6.422c.916-4.119-9.459-7.485-9.154-14.341c.183-4.11 4.577-8.849 18.842-12.587");
}
</style><path class="rn07uccio"/>`,
		"fallback": "arcticons:sportzfy",
	});
}

export default Component;
