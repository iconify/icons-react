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
		"content": `<style>.dqv7viulr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 24l7.488-7.488v14.976zm37 0l-7.488-7.488v14.976zm-22.024 3.524h7.048v7.488h3.964L24 42.5l-7.488-7.488h3.964zm0-7.048h7.048v-7.488h3.964L24 5.5l-7.488 7.488h3.964z");
}
</style><path class="dqv7viulr"/>`,
		"fallback": "arcticons:nova-post",
	});
}

export default Component;
