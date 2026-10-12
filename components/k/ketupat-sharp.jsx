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
		"content": `<style>.fpk_xj6ix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.85 6.91l5.3 5.68l.85.91l-.85.91l-5.3 5.68L12 21l-.85-.91l-5.3-5.68L5 13.5l.85-.91l5.3-5.68L12 6zM9.4 10.75l5.2 5.5m0-5.5l-5.2 5.5M12 6V3.563l3.25-.813M12 6l-.737-2.211L8.5 3");
}
</style><path class="fpk_xj6ix"/>`,
		"fallback": "iconoven:ketupat-sharp",
	});
}

export default Component;
