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
		"content": `<style>.h4aht9c7c {
  fill: currentColor;
  d: path("M200 36a12 12 0 0 0 0 24a12 12 0 0 1 12 12v52H44V72a12 12 0 0 1 12-12a12 12 0 0 0 0-24a36 36 0 0 0-36 36v92a48 48 0 0 0 96 0v-16h24v16a48 48 0 0 0 96 0V72a36 36 0 0 0-36-36M68 188a24 24 0 0 1-24-24v-9l31.74 31.74A23.9 23.9 0 0 1 68 188m24-24a25 25 0 0 1-.44 4.59L71 148h21Zm96 24a24 24 0 0 1-24-24v-9l31.74 31.74A23.9 23.9 0 0 1 188 188m24-24a25 25 0 0 1-.44 4.59L191 148h21Z");
}
</style><path class="h4aht9c7c"/>`,
		"fallback": "ph:sunglasses-bold",
	});
}

export default Component;
