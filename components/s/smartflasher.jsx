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
		"content": `<style>.lr8as2bsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.66 4.5V24h-6.33l11.01 19.5V24h6.33z");
}

.zxvreoboa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.34 36.55a12.76 12.76 0 0 0-.83-25.22m-3.85.12a12.76 12.76 0 0 0 .83 25.22");
}
</style><path class="lr8as2bsj"/><path class="zxvreoboa"/>`,
		"fallback": "arcticons:smartflasher",
	});
}

export default Component;
