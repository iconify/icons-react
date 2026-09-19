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
		"content": `<style>.tqiec8bpk {
  fill: currentColor;
  d: path("M4 16v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2m13 2H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1M12 2C9.54 2 7.48 3.79 7.07 6.13c-.08.52.06 1.05.36 1.47l3.76 5.26a1 1 0 0 0 1.63 0l3.76-5.26c.3-.42.44-.95.35-1.47A5.016 5.016 0 0 0 12 2");
}
</style><path class="tqiec8bpk"/>`,
		"fallback": "ic:round-approval",
	});
}

export default Component;
