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
		"content": `<style>.texcxbcjh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 5q0-2.25 2.25-2.25h5q.084 0 .167.019q.082.018.158.055t.142.089t.119.118L11.36 5.25H20q2.25 0 2.25 2.25V19q0 2.25-2.25 2.25H4q-2.25 0-2.25-2.25zm7.068 5.068Q7.5 11.386 7.5 13.25t1.318 3.182T12 17.75t3.182-1.318T16.5 13.25t-1.318-3.182T12 8.75t-3.182 1.318");
}
</style><path class="texcxbcjh"/>`,
		"fallback": "uix-solid:ip-portfolio",
	});
}

export default Component;
