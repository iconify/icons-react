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
		"content": `<style>.vmwcp1byk {
  fill: currentColor;
  d: path("M3.581 15.356a9.062 9.062 0 0 1 9.543-12.348a1 1 0 1 1-.248 1.984a7.062 7.062 0 0 0-7.237 10.076a3 3 0 1 1-2.058.288m16.838-6.712a9.062 9.062 0 0 1-9.543 12.348a.999.999 0 1 1 .248-1.984a7.058 7.058 0 0 0 7.237-10.076a3 3 0 1 1 2.058-.288M8.315 10.443a4.001 4.001 0 0 1 7.37 3.114a4.001 4.001 0 0 1-7.37-3.114");
}
</style><path class="vmwcp1byk"/>`,
		"fallback": "coolicons:orbit-fill-round",
	});
}

export default Component;
