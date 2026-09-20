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
		"content": `<style>.d40koccjx {
  fill: currentColor;
  d: path("M3.23 17.385v-1h17.54v1zM4 15v-.23q0-2.95 2.01-5.103Q8.022 7.516 11 7.097v-.443q0-.402.299-.701q.299-.3.701-.3t.701.3t.299.7v.443q2.985.42 4.992 2.571T20 14.77V15z");
}
</style><path class="d40koccjx"/>`,
		"fallback": "material-symbols-light:room-service",
	});
}

export default Component;
