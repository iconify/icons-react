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
		"content": `<style>.wyy5arbnn {
  fill: currentColor;
  d: path("M14.636 3.128a.75.75 0 0 1 .203 1.041L6.406 16.671a.75.75 0 1 1-1.243-.839l8.432-12.501a.75.75 0 0 1 1.041-.203M5.75 4.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M2.5 6.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m10 7.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m1.75-3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5");
}
</style><path class="wyy5arbnn"/>`,
		"fallback": "fluent:text-percent-20-filled",
	});
}

export default Component;
