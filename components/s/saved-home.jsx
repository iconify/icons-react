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
		"content": `<style>.ew-9njtxy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.5 1.75q-2.75 0-2.75 2.75v17q0 .124.04.242t.116.215q.045.059.1.107q.056.049.12.086t.134.06t.143.034q.073.009.147.004t.145-.024t.138-.052t.124-.078L12 17.446l6.043 4.648q.098.076.215.116q.118.04.242.04q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-17q0-2.75-2.75-2.75zm.909 7.281l2-2q.659-.66 1.591-.66t1.591.66l2 2q.659.659.659 1.59V12q0 .932-.659 1.591T14 14.25h-4q-2.25 0-2.25-2.25v-1.379q0-.931.658-1.59z");
}
</style><path class="ew-9njtxy"/>`,
		"fallback": "uix-solid:saved-home",
	});
}

export default Component;
