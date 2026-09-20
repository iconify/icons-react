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
		"content": `<style>.b783n6blg {
  fill: currentColor;
  d: path("M17.215 8.68c1.047.568 1.047 2.07 0 2.638l-11.999 6.5a1.5 1.5 0 0 1-2.214-1.32V3.5a1.5 1.5 0 0 1 2.214-1.32z");
}
</style><path class="b783n6blg"/>`,
		"fallback": "fluent:triangle-right-20-filled",
	});
}

export default Component;
