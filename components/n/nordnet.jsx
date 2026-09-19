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
		"content": `<style>.dc0ceq_sb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.15 17.35h10.1v13.3l11.65-13.3h5.6l-11.65 13.3h-10.1v-13.3L10.1 30.65H4.5Zm0 0");
}
</style><path class="dc0ceq_sb"/>`,
		"fallback": "arcticons:nordnet",
	});
}

export default Component;
