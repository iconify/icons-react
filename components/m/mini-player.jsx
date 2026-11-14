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
		"content": `<style>.need1fbap {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.875 2.25h10.25q2.123 0 3.624 1.501t1.501 3.624v4.25q0 1.967-1.289 3.401q-.136-.106-.286-.205l-2.259-1.478q-1.747-1.142-3.582-.149T13 16.273v.477H6.875q-2.123 0-3.624-1.501T1.75 11.625v-4.25q0-2.123 1.501-3.624T6.875 2.25m10.857 12.139l2.259 1.478q1.017.667 1.017 1.883t-1.017 1.882l-2.259 1.479q-1.123.734-2.303.095q-1.18-.638-1.179-1.979v-2.954q-.001-1.341 1.179-1.979t2.302.095zm-.822 1.256q-.374-.245-.767-.032t-.393.66v2.954q0 .447.393.66t.767-.032l2.259-1.477q.339-.223.339-.628t-.339-.627z");
}
</style><path class="need1fbap"/>`,
		"fallback": "uix-solid:mini-player",
	});
}

export default Component;
