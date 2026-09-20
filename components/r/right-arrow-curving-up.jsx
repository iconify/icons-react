import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.udptedcuo {
  fill: var(--svg-color--fff, #fff);
  d: path("m20.589 5.8l6 7.2H23v7.2c0 5.523-4.683 10-10.206 10c-1.414 0-2.861-.298-4.081-.827l2.699-3.3c.396.083.987.127 1.408.127c3.314 0 6.18-2.686 6.18-6V13h-4.411z");
}

.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="x-kz1kb7j"/><path class="udptedcuo"/>`,
		"fallback": "twemoji:right-arrow-curving-up",
	});
}

export default Component;
