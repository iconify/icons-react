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
		"content": `<style>.ewzqe8lah {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 7.5q0-1.968 1.391-3.359T7 2.75t3.359 1.391T11.75 7.5t-1.391 3.359T7 12.25t-3.359-1.391T2.25 7.5m17.5-4.75h-4q-2.5 0-2.5 2.5v4q0 1.036.732 1.768t1.768.732h4q1.036 0 1.768-.732t.732-1.768v-4q0-1.036-.732-1.768T19.75 2.75m-5.983 10.457l2.026 2.026q1.766 1.767.001 3.534l-2.027 2.026q-1.767 1.766-3.534.001l-2.026-2.027Q6.441 17 8.206 15.233l2.027-2.026q1.767-1.766 3.534-.001z");
}
</style><path class="ewzqe8lah"/>`,
		"fallback": "uix-solid:piste-difficulty",
	});
}

export default Component;
