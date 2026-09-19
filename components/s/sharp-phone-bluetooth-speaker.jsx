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
		"content": `<style>.bqqkjfo0c {
  fill: currentColor;
  d: path("M14.71 9.5L17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6L14 8.79zM18 2.91l.94.94l-.94.94zm0 4.3l.94.94l-.94.94zm3 8.25l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z");
}
</style><path class="bqqkjfo0c"/>`,
		"fallback": "ic:sharp-phone-bluetooth-speaker",
	});
}

export default Component;
