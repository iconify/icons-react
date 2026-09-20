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
		"content": `<style>.s1fkt5cuz {
  fill: currentColor;
  d: path("M2.302 16.63c-.86 1.5.222 3.37 1.951 3.37h15.49c1.729 0 2.812-1.87 1.951-3.37L13.95 3.129c-.865-1.507-3.04-1.507-3.904 0zm1.951 1.87a.75.75 0 0 1-.65-1.123l7.744-13.502a.75.75 0 0 1 1.301 0l7.745 13.502a.75.75 0 0 1-.65 1.123z");
}
</style><path class="s1fkt5cuz"/>`,
		"fallback": "fluent:triangle-24-regular",
	});
}

export default Component;
