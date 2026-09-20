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
		"content": `<style>.fuf_rigco {
  fill: currentColor;
  d: path("M3.73 19.577v-3.154h16.54v3.154zm1.54-.77h1.615v-1.615H5.268zM3.73 7.578V4.423h16.54v3.154zm1.54-.77h1.615V5.193H5.268zm-1.54 6.77v-3.154h16.54v3.154zm1.54-.77h1.615v-1.615H5.268z");
}
</style><path class="fuf_rigco"/>`,
		"fallback": "material-symbols-light:storage-sharp",
	});
}

export default Component;
