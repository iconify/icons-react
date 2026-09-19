import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g81u1-boi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.658 40.755c2.631-1.655 4.419-7.282 1.028-10.234L9.773 42.124c-.64.936-.3 1.934 1.695 1.005l7.296-3.405l12.395-5.77a3.234 3.234 0 0 0 1.502-4.32l-.006-.012l-6.84-14.775c-.82-1.689.484-4.355 2.886-6.314m2.64-1.288c-2.63 1.655-4.418 7.282-1.027 10.234l7.913-11.603c.64-.936.3-1.934-1.695-1.005l-7.296 3.405l-12.395 5.77a3.234 3.234 0 0 0-1.502 4.32l.006.012l6.84 14.775c.82 1.689-.484 4.355-2.886 6.315");
}
</style><path class="g81u1-boi"/>`,
		"fallback": "arcticons:thunder",
	});
}

export default Component;
