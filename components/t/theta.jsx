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
		"content": `<style>.oyh-m6bif {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.764 11.288q.115-.038.236-.038h12q.121 0 .236.038q-.144-3.485-1.707-6.043Q14.699 2.25 12 2.25T7.471 5.245q-1.563 2.558-1.707 6.043m12.472 1.424q-.115.038-.236.038H6q-.121 0-.236-.038q.144 3.485 1.707 6.043Q9.301 21.75 12 21.75t4.529-2.995q1.563-2.558 1.707-6.043");
}
</style><path class="oyh-m6bif"/>`,
		"fallback": "uix-solid:theta",
	});
}

export default Component;
