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
		"content": `<style>.jgjhjxbvb {
  fill: currentColor;
  d: path("m10 16l6-4l-6-4zm-1.9 5.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12q0-1.075.225-2.113t.65-2.012l1.55 1.55q-.2.65-.312 1.287T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12t-2.325-5.675T12 4q-.675 0-1.312.112t-1.263.313L7.9 2.9q1-.45 2-.675T12 2q2.075 0 3.9.787t3.175 2.138T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M4.438 6.562Q4 6.125 4 5.5t.438-1.062T5.5 4t1.063.438T7 5.5t-.437 1.063T5.5 7t-1.062-.437M12 12");
}
</style><path class="jgjhjxbvb"/>`,
		"fallback": "material-symbols:motion-play-outline",
	});
}

export default Component;
