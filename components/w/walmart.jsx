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
		"content": `<style>.kpnhbe7zl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 15.42V4.5m7.41 15.2l9.46-5.46m-9.46 14.02l9.46 5.46M24 32.58V43.5m-7.41-15.24l-9.46 5.46m9.46-14.02l-9.46-5.46");
}
</style><path class="kpnhbe7zl"/>`,
		"fallback": "arcticons:walmart",
	});
}

export default Component;
