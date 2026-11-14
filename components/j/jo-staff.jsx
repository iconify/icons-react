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
		"content": `<style>.eo751pb3d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m20.485 3.869l-.354-.355q-1.767-1.765-3.534.001q-.733.732-.733 1.768q0 .775.411 1.381l-9.611 9.611q-.606-.411-1.382-.411q-1.035 0-1.768.733q-1.765 1.767.001 3.534l.354.355q1.767 1.765 3.534-.001q.733-.732.733-1.768q0-.775-.411-1.381l9.611-9.611q.606.411 1.381.411q1.036 0 1.769-.733q1.765-1.767-.001-3.534");
}
</style><path class="eo751pb3d"/>`,
		"fallback": "uix-solid:jo-staff",
	});
}

export default Component;
