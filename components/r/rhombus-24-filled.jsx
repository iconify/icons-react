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
		"content": `<style>.ru0e3bbdr {
  fill: currentColor;
  d: path("M5.807 5.408A2.25 2.25 0 0 1 7.894 4h12.858a2.25 2.25 0 0 1 2.087 3.092l-4.642 11.5A2.25 2.25 0 0 1 16.111 20H3.252a2.25 2.25 0 0 1-2.086-3.092z");
}
</style><path class="ru0e3bbdr"/>`,
		"fallback": "fluent:rhombus-24-filled",
	});
}

export default Component;
