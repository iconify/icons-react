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
		"content": `<style>.njchtrbku {
  fill: currentColor;
  d: path("m10.567 17.929l.423 2.928a1.001 1.001 0 0 1-1.545.975c-1.854-1.237-3.557-2.817-4.876-4.616a14 14 0 0 1-1.832-3.314A10.9 10.9 0 0 1 2 10a7.98 7.98 0 0 1 2.343-5.657A8.002 8.002 0 0 1 17.98 9.43a1 1 0 0 1-.995 1.07a6.492 6.492 0 0 0-6.418 7.429m-.44-5.932a3 3 0 1 0-.253-5.993a3 3 0 0 0 .253 5.993M18 18a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm-.99 2a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}
</style><path class="njchtrbku"/>`,
		"fallback": "coolicons:map-pin-warning-corner-fill-round",
	});
}

export default Component;
