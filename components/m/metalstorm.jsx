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
		"content": `<style>.cb-zjqbjl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 14.183L39.06 9.69l-6.748 5.518v14.023l-4.157 6.955V18.638l-2.44 1.967v19.667L24 43.142l-1.715-2.87V20.605l-2.44-1.967v17.548l-4.158-6.955V15.208L8.94 9.69z");
}

.do87y1bcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.923 10.628L6.533 7.401v-.59h10.356L24 4.859l7.11 1.955h10.358v.59l-14.39 3.225L24 8.314z");
}
</style><path class="cb-zjqbjl"/><path class="do87y1bcc"/>`,
		"fallback": "arcticons:metalstorm",
	});
}

export default Component;
