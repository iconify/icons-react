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
		"content": `<style>.numh2rb3z {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 11C4.3509 10.1345 4 9.0819 4 8C4 5.2386 6.2386 3 9 3C10.0819 3 11.1345 3.3509 12 4C12.8655 3.3509 13.9181 3 15 3C17.7614 3 20 5.2386 20 8C20 9.0819 19.6491 10.1345 19 11M8 14L8 15L8 17L8 18M12 14L12 15L12 17L12 18M16 14L16 15L16 17L16 18M2.0024 11L21.9976 11L20 21L4 21Z");
}
</style><path class="numh2rb3z"/>`,
		"fallback": "keyline-icons:laundry-basket-sharp",
	});
}

export default Component;
