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
		"content": `<style>.hhaay8byw {
  fill: currentColor;
  d: path("M11.277 15.492q.6.293 1.243.053t.836-.903q.473-1.58.913-3.16q.44-1.578.879-3.172q.1-.335-.216-.484t-.534.143q-.938 1.366-1.888 2.7t-1.875 2.697q-.39.557-.173 1.196t.815.93M5.106 19q-.281 0-.513-.112t-.391-.338q-.604-1.084-.906-2.253q-.302-1.168-.302-2.408q.006-1.827.735-3.451t1.96-2.83T8.546 5.7T12 5q1.864 0 3.503.71q1.64.711 2.858 1.93t1.929 2.857Q21 12.137 21 14q0 1.196-.302 2.337q-.302 1.14-.894 2.136q-.14.264-.385.395T18.9 19z");
}
</style><path class="hhaay8byw"/>`,
		"fallback": "material-symbols-light:speed-4-rounded",
	});
}

export default Component;
