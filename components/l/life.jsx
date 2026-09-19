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
		"content": `<style>.okg82ac0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.069 3.5c13.06 0 20.752 9.077 20.752 22.138c0 23.259-33.688 26.269-33.688 1.93c0-14.289 8.761-16.06 12.81-16.06c7.951 0 12.492 5.8 12.492 14.507c0 11.855-16.937 16.775-16.937.958c0-5.06.847-8.085 4.948-8.085c2.969 0 3.168 4.03 3.224 6.246C28.275 49 3.18 47.436 3.18 24.92c0-12.671 9.592-21.42 20.89-21.42");
}
</style><path class="okg82ac0g"/>`,
		"fallback": "arcticons:life",
	});
}

export default Component;
