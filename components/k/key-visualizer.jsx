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
		"content": `<style>.axrxrfmgs {
  fill: currentColor;
  d: path("M4 20v-1h2v1zm0-3.75v-1h6.673v1zm0-3.75v-1h16v1zm0-3.75v-1h6.673v1zM4 5V4h2v1zm4.673 15v-1h2v1zm0-15V4h2v1zm4.654 15v-1h2v1zm0-3.75v-1H20v1zm0-7.5v-1H20v1zm0-3.75V4h2v1zM18 20v-1h2v1zm0-15V4h2v1z");
}
</style><path class="axrxrfmgs"/>`,
		"fallback": "material-symbols-light:key-visualizer",
	});
}

export default Component;
