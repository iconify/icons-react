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
		"content": `<style>.uolbldbhx {
  fill: currentColor;
  d: path("M8.923 19.77v-1h6.154v1zm0-2.77L8.038 5.689q-.055-.703.41-1.196Q8.914 4 9.616 4h4.769q.702 0 1.167.493t.41 1.195L15.077 17z");
}
</style><path class="uolbldbhx"/>`,
		"fallback": "material-symbols-light:on-hub-device",
	});
}

export default Component;
