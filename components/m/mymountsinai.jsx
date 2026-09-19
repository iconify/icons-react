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
		"content": `<style>.qrp4axuui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 15.643l13.929 20.893M32.357 19.82L21.214 36.536m-5.571 0L29.57 15.643m-19.5 20.893l16.715-25.072L43.5 36.536m-39 0l13.929-20.893l13.928 20.893");
}
</style><path class="qrp4axuui"/>`,
		"fallback": "arcticons:mymountsinai",
	});
}

export default Component;
