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
		"content": `<style>.poqz6lb2f {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm2 14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a.997.997 0 0 0-1 1ZM8.629 8.665L7.5 8.107l3.836-1.894c.202-.1.425-.153.651-.155h.026c.226.002.449.055.651.155L16.5 8.107L12 10.329ZM6.5 9.844l4.5 2.222v5.555l-3.664-1.809a1.5 1.5 0 0 1-.836-1.345Zm6.5 2.222l4.5-2.222v4.623a1.5 1.5 0 0 1-.836 1.345L13 17.621Z");
}
</style><path class="poqz6lb2f"/>`,
		"fallback": "coolicons:square-box-fill",
	});
}

export default Component;
