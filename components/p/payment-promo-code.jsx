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
		"content": `<style>.s20sqpbik {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.413 2.25H5.625q-1.398 0-2.386.989q-.989.988-.989 2.386v4.788q0 1.398.989 2.386l6.875 6.875q2.386 2.386 4.772 0l4.788-4.788q2.386-2.386 0-4.772l-6.875-6.875q-.988-.989-2.386-.989M5.5 7.75q0-2.25 2.25-2.25T10 7.75T7.75 10T5.5 7.75");
}
</style><path class="s20sqpbik"/>`,
		"fallback": "uix-solid:payment-promo-code",
	});
}

export default Component;
