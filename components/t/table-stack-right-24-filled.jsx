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
		"content": `<style>.qa1n4tbjd {
  fill: currentColor;
  d: path("M8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zm0 6.5H3v5h5zm1.5 5v-5h5v5zM8 16H3v1.75A3.25 3.25 0 0 0 6.25 21H8zm1.5 5v-5h5v4.25a.75.75 0 0 1-.75.75zm0-13V3h4.25a.75.75 0 0 1 .75.75V8zm10 12.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0z");
}
</style><path class="qa1n4tbjd"/>`,
		"fallback": "fluent:table-stack-right-24-filled",
	});
}

export default Component;
