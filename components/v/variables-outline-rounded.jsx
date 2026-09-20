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
		"content": `<style>.qgz28qb5s {
  fill: currentColor;
  d: path("M4 15.2V8.8q0-.34.232-.57T4.808 8h14.384q.344 0 .576.23T20 8.8v6.4q0 .34-.232.57t-.576.23H4.808q-.343 0-.576-.23T4 15.2m1-.2h14V9H5zm0 0V9z");
}
</style><path class="qgz28qb5s"/>`,
		"fallback": "material-symbols-light:variables-outline-rounded",
	});
}

export default Component;
