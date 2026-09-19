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
		"content": `<style>.vzhqc82wb {
  fill: currentColor;
  d: path("M8.56 14h6.89c.26-.45.44-.96.51-1.5h-7.9c.06.54.23 1.05.5 1.5M12 16c1.01 0 1.91-.39 2.62-1H9.38c.71.61 1.61 1 2.62 1m0-8c-1.01 0-1.91.39-2.62 1h5.24c-.71-.61-1.61-1-2.62-1m-3.44 2c-.26.45-.44.96-.51 1.5h7.9c-.07-.54-.24-1.05-.51-1.5z");
}

.wk1ozebmc {
  fill: currentColor;
  d: path("M3 3v18h18V3zm9 15c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6");
}
</style><path class="vzhqc82wb"/><path class="wk1ozebmc"/>`,
		"fallback": "ic:sharp-hvac",
	});
}

export default Component;
