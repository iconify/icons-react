import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.su_2fl0bk {
  d: path("M11.072 2.458l3.238 3.31a6.03 6.03 0 0 1-3.81 10.227v1.504a.5.5 0 1 1-1 0v-1.504A6.03 6.03 0 0 1 5.69 5.769l3.238-3.31a1.5 1.5 0 0 1 2.144 0zM10.5 14.991a5.03 5.03 0 0 0 3.096-8.523l-3.239-3.31a.5.5 0 0 0-.714 0l-3.239 3.31A5.03 5.03 0 0 0 9.5 14.99V9.499a.5.5 0 1 1 1 0v5.492z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="su_2fl0bk"/></g>`,
		"fallback": "fluent:leaf-20-regular",
	});
}

export default Component;
