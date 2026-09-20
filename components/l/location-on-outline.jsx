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
		"content": `<style>.c39ct9bpm {
  fill: currentColor;
  d: path("M13.143 11.259q.473-.472.473-1.143q0-.672-.473-1.144Q12.671 8.5 12 8.5t-1.143.472t-.472 1.144q0 .67.472 1.143q.472.472 1.143.472t1.143-.472M12 19.677q2.82-2.454 4.458-4.991t1.638-4.39q0-2.744-1.737-4.53Q14.62 3.981 12 3.981T7.641 5.766t-1.737 4.53q0 1.852 1.638 4.39T12 19.677m0 1.342q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814m0-10.903");
}
</style><path class="c39ct9bpm"/>`,
		"fallback": "material-symbols-light:location-on-outline",
	});
}

export default Component;
