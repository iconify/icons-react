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
		"content": `<style>.o4-yn8cgu {
  fill: currentColor;
  d: path("m17.467 14.27l-1.213-.693l2.558-1.87L20 12.4zM5 19v-1h4.192q.27 0 .443-.173t.173-.442V11.78l-2.923-1.629q-.61-.329-.784-.982t.174-1.243l1.23-2.08q.33-.572.963-.746t1.205.155l8.89 4.923l-5.042 3.665l-2.732-1.503v5.044q0 .67-.473 1.143Q9.844 19 9.173 19z");
}
</style><path class="o4-yn8cgu"/>`,
		"fallback": "material-symbols-light:speed-camera",
	});
}

export default Component;
