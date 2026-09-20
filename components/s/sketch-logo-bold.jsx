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
		"content": `<style>.lo7e36akk {
  fill: currentColor;
  d: path("m249 96.1l-56-64a12 12 0 0 0-9-4.1H72a12 12 0 0 0-9 4.1l-56 64a12 12 0 0 0 .26 16.09l112 120a12 12 0 0 0 17.54 0l112-120a12 12 0 0 0 .2-16.09M213.55 92H182l-30-40h26.55ZM71.88 116l21.19 53l-49.46-53Zm86.4 0L128 191.69L97.72 116ZM104 92l24-32l24 32Zm80.12 24h28.27l-49.46 53ZM77.45 52H104L74 92H42.45Z");
}
</style><path class="lo7e36akk"/>`,
		"fallback": "ph:sketch-logo-bold",
	});
}

export default Component;
