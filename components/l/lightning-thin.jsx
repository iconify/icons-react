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
		"content": `<style>.cjaq7xb2c {
  fill: currentColor;
  d: path("M211.89 119.09a4 4 0 0 0-2.49-2.84l-60.81-22.8l15.33-76.67a4 4 0 0 0-6.84-3.51l-112 120a4 4 0 0 0-1 3.64a4 4 0 0 0 2.49 2.84l60.81 22.8l-15.3 76.67a4 4 0 0 0 6.84 3.51l112-120a4 4 0 0 0 .97-3.64M102.68 227l13.24-66.2a4 4 0 0 0-2.52-4.53L55 134.36L153.32 29l-13.24 66.2a4 4 0 0 0 2.52 4.53l58.4 21.91Z");
}
</style><path class="cjaq7xb2c"/>`,
		"fallback": "ph:lightning-thin",
	});
}

export default Component;
