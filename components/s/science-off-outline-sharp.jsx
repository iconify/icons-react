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
		"content": `<style>.jva505b2p {
  fill: currentColor;
  d: path("m14 11.31l-1-1V5h-2v3.31l-1-1V5H8.116V4h7.769v1H14zM5 19h12.43l-6.822-6.823zm14.223 1.792L18.431 20H5q-.64 0-.909-.57t.128-1.065L9.9 11.47L3.17 4.74l.707-.708l16.054 16.054zM12 9.31");
}
</style><path class="jva505b2p"/>`,
		"fallback": "material-symbols-light:science-off-outline-sharp",
	});
}

export default Component;
