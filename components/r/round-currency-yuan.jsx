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
		"content": `<style>.byfh8nyzb {
  fill: currentColor;
  d: path("M12 21c-.55 0-1-.45-1-1v-6H7c-.55 0-1-.45-1-1s.45-1 1-1h3.72L5.98 4.54A.998.998 0 0 1 6.82 3c.34 0 .66.17.84.46L12 10.29l4.34-6.83c.18-.29.5-.46.84-.46c.79 0 1.27.87.84 1.54L13.28 12H17c.55 0 1 .45 1 1s-.45 1-1 1h-4v6c0 .55-.45 1-1 1");
}
</style><path class="byfh8nyzb"/>`,
		"fallback": "ic:round-currency-yuan",
	});
}

export default Component;
