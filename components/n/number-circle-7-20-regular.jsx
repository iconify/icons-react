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
		"content": `<style>.axdwqi9ii {
  fill: currentColor;
  d: path("M3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0m7-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16M7.5 6a.5.5 0 0 0 0 1h4.076a20.3 20.3 0 0 0-2.569 6.916a.5.5 0 1 0 .986.168a19.3 19.3 0 0 1 1.743-5.299c.319-.64.613-1.14.827-1.48a11 11 0 0 1 .318-.48l.017-.022l.003-.004A.501.501 0 0 0 12.5 6z");
}
</style><path class="axdwqi9ii"/>`,
		"fallback": "fluent:number-circle-7-20-regular",
	});
}

export default Component;
