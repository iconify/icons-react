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
		"content": `<style>.g3cr3c5tq {
  fill: currentColor;
  d: path("M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5A6.25 6.25 0 0 0 10.25 41h27.5A6.25 6.25 0 0 0 44 34.75v-21.5A6.25 6.25 0 0 0 37.75 7zM41.5 34.75a3.75 3.75 0 0 1-3.75 3.75h-19.5v-18H41.5zm0-16.75H18.25V9.5h19.5a3.75 3.75 0 0 1 3.75 3.75z");
}
</style><path class="g3cr3c5tq"/>`,
		"fallback": "fluent:panel-left-header-48-filled",
	});
}

export default Component;
