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
		"content": `<style>.na7mf3b2e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 12q0-1.864 1.318-3.182T6.5 7.5t3.182 1.318T11 12q0 1.737-1.145 3h4.29Q13 13.737 13 12q0-1.864 1.318-3.182T17.5 7.5t3.182 1.318T22 12t-1.318 3.182T17.5 16.5h-11q-1.864 0-3.182-1.318T2 12");
}
</style><path class="na7mf3b2e"/>`,
		"fallback": "uix-solid:voicemail",
	});
}

export default Component;
