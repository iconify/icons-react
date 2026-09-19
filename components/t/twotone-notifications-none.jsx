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
		"content": `<style>.uziupgbza {
  fill: currentColor;
  d: path("M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zfjdsmb7g {
  fill: currentColor;
  d: path("M18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2");
}
</style><path class="uziupgbza"/><path class="zfjdsmb7g"/>`,
		"fallback": "ic:twotone-notifications-none",
	});
}

export default Component;
