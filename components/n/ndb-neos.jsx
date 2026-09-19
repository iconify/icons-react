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
		"content": `<style>.j0kkunbqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.293 8.052L5.5 23.361V8.052zm6.379 6.379L11.88 42.5h26.792zM5.5 28.465V42.5l37-37z");
}
</style><path class="j0kkunbqx"/>`,
		"fallback": "arcticons:ndb-neos",
	});
}

export default Component;
