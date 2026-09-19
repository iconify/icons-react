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
		"content": `<style>.do5tl5bwu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.672 32.342a12.543 12.543 0 0 0 20.197 3.484l5.913-5.913c4.898-4.898 4.898-12.84 0-17.738s-12.84-4.898-17.738 0l-5.913 5.913a4.18 4.18 0 1 0 5.913 5.913l5.913-5.913a4.18 4.18 0 1 1 5.913 5.913l-5.913 5.913a12.543 12.543 0 1 1-2.95-19.927");
}
</style><path class="do5tl5bwu"/>`,
		"fallback": "arcticons:sunlight-dating",
	});
}

export default Component;
