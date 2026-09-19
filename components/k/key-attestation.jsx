import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tts_vfbse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.68 15.457c0 4.747-3.846 8.597-8.59 8.597h0c-4.744 0-8.59-3.85-8.59-8.597h0c0-4.748 3.845-8.598 8.589-8.598h.001c4.744 0 8.59 3.849 8.59 8.597zm-.05-.901l19.87-2.797m-5.382.758l.812 5.778M17.019 34.701l6.434 6.44l11.56-11.569");
}
</style><path class="tts_vfbse"/>`,
		"fallback": "arcticons:key-attestation",
	});
}

export default Component;
