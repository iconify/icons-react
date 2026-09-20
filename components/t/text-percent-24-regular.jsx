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
		"content": `<style>.nujp5ljnf {
  fill: currentColor;
  d: path("M17.984 3.128a.75.75 0 0 1 .202 1.041L7.057 20.67a.75.75 0 1 1-1.243-.84L16.943 3.332a.75.75 0 0 1 1.04-.203M6.5 4.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M2.5 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0M15 17a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m2.5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="nujp5ljnf"/>`,
		"fallback": "fluent:text-percent-24-regular",
	});
}

export default Component;
