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
		"content": `<style>.szfd0fb1q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.75 9.499q1.109.362 1.999 1.252q1.501 1.501 1.501 3.624v2.25q0 2.123-1.501 3.624t-3.624 1.501h-6.25q-2.123 0-3.624-1.501T3.75 16.625v-2.25q0-2.123 1.501-3.624q.89-.89 1.999-1.252V7q0-1.968 1.391-3.359T12 2.25t3.359 1.391T16.75 7zm-8-.248l.125-.001h6.25l.125.001V7q0-3.25-3.25-3.25T8.75 7z");
}
</style><path class="szfd0fb1q"/>`,
		"fallback": "uix-solid:mutex",
	});
}

export default Component;
