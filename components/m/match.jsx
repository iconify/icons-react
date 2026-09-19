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
		"content": `<style>.mmx0p3dss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 14.299a3.77 3.77 0 0 0-3.771-3.771a3.77 3.77 0 0 0-3.228 1.828a3.77 3.77 0 0 0-3.228-1.828a3.77 3.77 0 0 0-3.772 3.771c0 .476.092.93.253 1.35c1.247 3.586 6.747 7.522 6.747 7.522s5.499-3.936 6.746-7.523c.16-.42.253-.873.253-1.349m-39 12.155a6.68 6.68 0 0 1 6.678-6.678h0a6.68 6.68 0 0 1 6.678 6.678v11.018M4.5 19.776v17.696m13.356-11.018a6.68 6.68 0 0 1 6.677-6.678h0a6.68 6.68 0 0 1 6.678 6.678v11.018");
}
</style><path class="mmx0p3dss"/>`,
		"fallback": "arcticons:match",
	});
}

export default Component;
