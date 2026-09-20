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
		"content": `<style>.dqiq5cd_q {
  fill: currentColor;
  d: path("M3 19v-6h8v6zm10 0v-6h8v6zM3 11V5h8v6zm10 0V5h8v6z");
}
</style><path class="dqiq5cd_q"/>`,
		"fallback": "material-symbols:tile-small-sharp",
	});
}

export default Component;
