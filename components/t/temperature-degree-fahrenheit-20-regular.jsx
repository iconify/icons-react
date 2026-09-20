import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t-j3u3b9j {
  fill: currentColor;
  d: path("M4 6.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M5.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m5 0a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V10h5a.5.5 0 0 0 0-1h-5V5h5.5a.5.5 0 0 0 0-1z");
}
</style><path class="t-j3u3b9j"/>`,
		"fallback": "fluent:temperature-degree-fahrenheit-20-regular",
	});
}

export default Component;
