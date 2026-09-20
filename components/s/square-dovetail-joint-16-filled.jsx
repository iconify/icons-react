import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.urht61w7e {
  fill: currentColor;
  d: path("M6 9.5a.498.498 0 0 1 .658-.474L9 9.807V6.194l-2.342.78A.5.5 0 0 1 6 6.5V2H4.5A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14H6zM11.5 2H7v3.806l2.342-.78A.5.5 0 0 1 10 5.5v5a.5.5 0 0 1-.208.405a.5.5 0 0 1-.45.069L7 10.193V14h4.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2");
}
</style><path class="urht61w7e"/>`,
		"fallback": "fluent:square-dovetail-joint-16-filled",
	});
}

export default Component;
