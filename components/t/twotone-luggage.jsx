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
		"content": `<style>.u6hnvbcsz {
  fill: currentColor;
  d: path("M9.5 18H8V9h1.5zm3.25 0h-1.5V9h1.5zM16 18h-1.5V9H16zm1-12h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2c0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6.5-2.5h3V6h-3zM17 19H7V8h10z");
}

.z2csywbeh {
  fill: currentColor;
  d: path("M7 8v11h10V8zm2.5 10H8V9h1.5zm3.25 0h-1.5V9h1.5zM16 18h-1.5V9H16z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="z2csywbeh"/><path class="u6hnvbcsz"/>`,
		"fallback": "ic:twotone-luggage",
	});
}

export default Component;
