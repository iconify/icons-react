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
		"content": `<style>.tk067rbdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 14.299a3.77 3.77 0 0 0-3.771-3.771a3.77 3.77 0 0 0-3.228 1.828a3.77 3.77 0 0 0-3.228-1.828a3.77 3.77 0 0 0-3.772 3.771c0 .476.092.93.253 1.35c1.247 3.586 6.747 7.522 6.747 7.522s5.499-3.936 6.746-7.523c.16-.42.253-.873.253-1.349m-39 12.155a6.678 6.678 0 1 1 13.356 0v11.018M4.5 19.776v17.696");
}

.w94qynlux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.856 26.454a6.678 6.678 0 1 1 13.356 0v11.018");
}
</style><path class="tk067rbdh"/><path class="w94qynlux"/>`,
		"fallback": "arcticons:match",
	});
}

export default Component;
