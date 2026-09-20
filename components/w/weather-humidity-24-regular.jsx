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
		"content": `<style>.w4v2iipsc {
  fill: currentColor;
  d: path("M14.75 20.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zm2.75-3a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5zm1-3a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1 0-1.5zM11.47 2.22a.75.75 0 0 1 1.06 0c.404.403 2 2.128 3.5 4.362c1.245 1.856 2.496 4.171 2.86 6.418h-1.519c-.355-1.829-1.406-3.822-2.588-5.582A33 33 0 0 0 12 3.848a33 33 0 0 0-2.783 3.57C8.035 9.178 6.984 11.171 6.629 13h-1.52c.365-2.247 1.615-4.562 2.862-6.418c1.5-2.234 3.095-3.959 3.499-4.362");
}
</style><path class="w4v2iipsc"/>`,
		"fallback": "fluent:weather-humidity-24-regular",
	});
}

export default Component;
