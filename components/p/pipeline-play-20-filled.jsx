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
		"content": `<style>.wp_iwp51i {
  fill: currentColor;
  d: path("M2 5.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3-.001zm12 3.522A5.5 5.5 0 0 0 9.022 14H6V6h8zM15 5.5v3.522a5.5 5.5 0 0 1 3 1.235V5.5a1.5 1.5 0 0 0-3 0m4 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.287-.437l-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874");
}
</style><path class="wp_iwp51i"/>`,
		"fallback": "fluent:pipeline-play-20-filled",
	});
}

export default Component;
