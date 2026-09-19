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
		"content": `<style>.ll9yx2bsb {
  fill: currentColor;
  d: path("M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.22c.36.32.97.32 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2M7.69 12.49C8.88 11.56 10.37 11 12 11s3.12.56 4.31 1.49C15.45 13.98 13.85 15 12 15s-3.45-1.02-4.31-2.51M12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2");
}
</style><path class="ll9yx2bsb"/>`,
		"fallback": "ic:round-person-pin-circle",
	});
}

export default Component;
