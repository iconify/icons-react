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
		"content": `<style>.nkjz2mbcj {
  fill: currentColor;
  d: path("M5.807 5.408A2.25 2.25 0 0 1 7.894 4h12.858a2.25 2.25 0 0 1 2.087 3.092l-4.642 11.5A2.25 2.25 0 0 1 16.111 20H3.252a2.25 2.25 0 0 1-2.086-3.092zm2.087.092a.75.75 0 0 0-.696.47l-4.641 11.5a.75.75 0 0 0 .695 1.03h12.859a.75.75 0 0 0 .695-.47l4.642-11.5a.75.75 0 0 0-.696-1.03z");
}
</style><path class="nkjz2mbcj"/>`,
		"fallback": "fluent:rhombus-24-regular",
	});
}

export default Component;
