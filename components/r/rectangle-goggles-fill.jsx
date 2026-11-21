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
		"content": `<style>.awkxx9ypg {
  fill: currentColor;
  d: path("M12 5L20 5C21.6569 5 23 6.3432 23 8L23 16C23 17.6569 21.6569 19 20 19L16.9612 19C16.0499 19 15.188 18.5857 14.6187 17.8742L11.9999 14.6009L9.3814 17.8741C8.812 18.5857 7.9501 19 7.0388 19L4 19C2.3432 19 1 17.6569 1 16L1 8C1 6.3431 2.3431 5 4 5Z");
}
</style><path class="awkxx9ypg"/>`,
		"fallback": "keyline-icons:rectangle-goggles-fill",
	});
}

export default Component;
