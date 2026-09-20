import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n601tdv2u {
  fill: currentColor;
  d: path("m235.71 134.51l-32-80a4 4 0 0 0-4.57-2.41L132 67V40a4 4 0 0 0-8 0v28.79L55.13 84.1a4 4 0 0 0-2.84 2.41l-32 80A4 4 0 0 0 20 168c0 20.4 22.08 28 36 28s36-7.6 36-28a4 4 0 0 0-.29-1.49L61.46 90.88L124 77v135h-20a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8h-20V75.21l61.47-13.66l-29.18 73A4 4 0 0 0 164 136c0 20.4 22.08 28 36 28s36-7.6 36-28a4 4 0 0 0-.29-1.49M56 188c-7.15 0-27.37-3.56-28-19.27l28-70l28 70C83.37 184.44 63.15 188 56 188m144-32c-7.15 0-27.37-3.56-28-19.27l28-70l28 70c-.63 15.71-20.85 19.27-28 19.27");
}
</style><path class="n601tdv2u"/>`,
		"fallback": "ph:scales-thin",
	});
}

export default Component;
