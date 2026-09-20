import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.trh7m_b1c {
  fill: currentColor;
  d: path("M7.25 6A3.25 3.25 0 0 0 4 9.25v9.5A3.25 3.25 0 0 0 7.25 22h17.5A3.25 3.25 0 0 0 28 18.75v-9.5A3.25 3.25 0 0 0 24.75 6zM6 9.25C6 8.56 6.56 8 7.25 8h17.5c.69 0 1.25.56 1.25 1.25v9.5c0 .69-.56 1.25-1.25 1.25H7.25C6.56 20 6 19.44 6 18.75zM3 24a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z");
}
</style><path class="trh7m_b1c"/>`,
		"fallback": "fluent:laptop-32-regular",
	});
}

export default Component;
