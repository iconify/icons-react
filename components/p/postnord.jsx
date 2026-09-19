import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yrg1w6djh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M12.182 30.535v4.784m-.408-22.981h5.564m11.401.078h7.74m-24.577 4.761h9.945m-10.005 4.124h7.025m1.826-.035h1.317m-8.166 9.269v4.784m4.885-4.784v4.784m5.179-4.784v4.784m1.954-4.784v4.784m3.909-4.784v4.784m1.954-4.784v4.784m3.909-4.784v4.784m-13.289-4.784v4.784");
}
</style><path class="yrg1w6djh"/>`,
		"fallback": "arcticons:postnord",
	});
}

export default Component;
