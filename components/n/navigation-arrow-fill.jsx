import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a_nz4j-9v {
  fill: currentColor;
  d: path("M248 121.58a15.76 15.76 0 0 1-11.29 15l-.2.06l-78 21.84l-21.84 78l-.06.2a15.77 15.77 0 0 1-15 11.29h-.3a15.77 15.77 0 0 1-15.07-10.67L41 61.41a1 1 0 0 1-.05-.16a16 16 0 0 1 20.3-20.35l.16.05l175.92 65.26A15.78 15.78 0 0 1 248 121.58");
}
</style><path class="a_nz4j-9v"/>`,
		"fallback": "ph:navigation-arrow-fill",
	});
}

export default Component;
