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
		"content": `<style>.v6ev4ef0u {
  fill: currentColor;
  d: path("M12 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m5-4h2c0 2.7-.93 4.41-2.3 5.5c-.5.4-1.1.7-1.7.9V22h-2v-6h-2v6H9V10.1q-.45.15-.6.3C7.87 10.81 7 11.43 7 14H5c0-2.06.35-3.78 2.11-5.29C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06C15.96 5.55 17 4.76 17 2M4 16h3v6H4z");
}
</style><path class="v6ev4ef0u"/>`,
		"fallback": "ic:twotone-hail",
	});
}

export default Component;
