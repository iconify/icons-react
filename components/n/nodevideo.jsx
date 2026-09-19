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
		"content": `<style>.n6eanrbnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.638 39.25c-.219.558-.697.086-.92-.334l-7.123-13.419c-.203-.382-.571-.275-.734 0l-7.518 12.678c-.343.58-.376.7-.918.7c-2.393-.008-4.787 0-7.18 0c-.523 0-1.05.045-.533-.859L22.06 9.426c.22-.384.936-.34 1.144.061l7.292 14.053L41.65 8.76c.318-.421 1.085-.375.78.405z");
}
</style><path class="n6eanrbnj"/>`,
		"fallback": "arcticons:nodevideo",
	});
}

export default Component;
