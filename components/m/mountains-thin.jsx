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
		"content": `<style>.oi0b00azf {
  fill: currentColor;
  d: path("M164 76a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16m87.44 162l-54.56-92.08a11.91 11.91 0 0 0-10.33-5.92a11.89 11.89 0 0 0-10.32 5.88l-29.61 50l-48.28-81.97a12 12 0 0 0-20.68 0L4.55 198A4 4 0 0 0 8 204h240a4 4 0 0 0 3.44-6M84.55 78a4 4 0 0 1 6.9 0l27.12 46H57.43ZM15 196l37.71-64h70.58L161 196Zm155.29 0l-19-32.29L183.11 110a4 4 0 0 1 6.88 0l51 86Z");
}
</style><path class="oi0b00azf"/>`,
		"fallback": "ph:mountains-thin",
	});
}

export default Component;
