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
		"content": `<style>.bah_1ol8l {
  fill: currentColor;
  d: path("M19.63 9.78L16.56 19H7.44L4.37 9.78L12 4.44zM2 9l4 12h12l4-12l-10-7z");
}

.vy-gjbfxv {
  fill: currentColor;
  d: path("M19.63 9.78L16.56 19H7.44L4.37 9.78L12 4.44z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="vy-gjbfxv"/><path class="bah_1ol8l"/>`,
		"fallback": "ic:twotone-pentagon",
	});
}

export default Component;
