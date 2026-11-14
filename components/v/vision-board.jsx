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
		"content": `<style>.sg8luv1kc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2.25Q9.25 2.25 9.25 5q0 .719.188 1.25H6q-1.76 0-3.005 1.245T1.75 10.5V18q0 1.76 1.245 3.005T6 22.25h12q1.76 0 3.005-1.245T22.25 18v-7.5q0-1.76-1.245-3.005T18 6.25h-3.438q.188-.531.188-1.25q0-2.75-2.75-2.75m-6.25 10q0-2.5 2.5-2.5h7.5q2.5 0 2.5 2.5v4.5q0 1.036-.732 1.768t-1.768.732h-7.5q-1.036 0-1.768-.732T5.75 16.75z");
}
</style><path class="sg8luv1kc"/>`,
		"fallback": "uix-solid:vision-board",
	});
}

export default Component;
