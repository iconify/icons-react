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
		"content": `<style>.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.j3opzsb3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.685 21.22v4.83a2.936 2.936 0 0 0 2.927 2.926a2.936 2.936 0 0 0 2.927-2.927v-4.83m.001 4.976v2.928m-11.42-4.977a2.936 2.936 0 0 1 2.926-2.927m-2.926.001v7.903m-4.542-10.246v8.782c0 .878.586 1.464 1.464 1.464h.439m-3.513-7.903h3.22m22.405 6.44c-.44.877-1.464 1.463-2.488 1.463a2.936 2.936 0 0 1-2.928-2.928v-1.902a2.936 2.936 0 0 1 2.928-2.928a2.936 2.936 0 0 1 2.927 2.928v1.024h-5.854");
}
</style><path class="g2wj9jbhp"/><path class="j3opzsb3r"/>`,
		"fallback": "arcticons:true-app",
	});
}

export default Component;
