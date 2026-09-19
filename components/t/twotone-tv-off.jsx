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
		"content": `<style>.t84wi2dks {
  fill: currentColor;
  d: path("M3 19h13.46l-12-12H3zm7.12-12L21 17.88V7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.uia-k8dra {
  fill: currentColor;
  d: path("M21 7v10.88l1.85 1.85c.09-.23.15-.47.15-.73V7c0-1.11-.89-2-2-2h-7.58l3.29-3.3L16 1l-4 4l-4-4l-.7.7L10.58 5H8.12l2 2zm-.54 16l1.26-1.27l-1.26 1.26zM2.41 2.13l-.14.14L1 3.54l1.53 1.53C1.65 5.28 1 6.06 1 7v12c0 1.1.9 2 2 2h15.46l1.99 1.99l1.26-1.26l.15-.15zM3 19V7h1.46l12 12z");
}
</style><path class="t84wi2dks"/><path class="uia-k8dra"/>`,
		"fallback": "ic:twotone-tv-off",
	});
}

export default Component;
