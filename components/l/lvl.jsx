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
		"content": `<style>.e9_oqkbgn {
  fill: var(--svg-color--ffb313, #ffb313);
  d: path("M4.161 3h5.807v4.065H4.16zm0 6.968h9.871v4.064h-9.87zm0 6.968H19.84V21H4.16z");
}
</style><path class="e9_oqkbgn"/>`,
		"fallback": "token-branded:lvl",
	});
}

export default Component;
