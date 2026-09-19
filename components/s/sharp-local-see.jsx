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
		"content": `<style>.ao-jgjb9i {
  fill: currentColor;
  d: path("M22 4h-5.17L15 2H9L7.17 4H2v16h20zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}

.eyxzjrb5l {
  cx: 12px;
  cy: 12px;
  r: 3.2px;
  fill: currentColor;
}
</style><circle class="eyxzjrb5l"/><path class="ao-jgjb9i"/>`,
		"fallback": "ic:sharp-local-see",
	});
}

export default Component;
