import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hhqyxtb4q {
  cx: 32px;
  cy: 31.999px;
  fill: var(--svg-color--e0e7ec, #e0e7ec);
  rx: 25.02px;
  ry: 25.01px;
}

.md2f3qb6d {
  fill: var(--svg-color--405866, #405866);
  d: path("M32 1C14.91 1 1 14.904 1 32c0 17.09 13.904 30.998 31 30.998c17.1 0 31-13.904 31-30.998C63 14.91 49.096 1 32 1m0 54.48c-12.947 0-23.485-10.534-23.485-23.481S19.05 8.51 32 8.51c12.947 0 23.486 10.54 23.486 23.49c0 12.947-10.534 23.48-23.486 23.48");
}
</style><ellipse class="hhqyxtb4q"/><path class="md2f3qb6d"/>`,
		"fallback": "emojione-v1:radio-button",
	});
}

export default Component;
