import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k5bfekbxr.css';
import '../../css/m/mi4kk5bjd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k5bfekbxr"/><path class="mi4kk5bjd"/></g>`,
		"fallback": "streamline:programming-cloud-upload-cloud-server-internet-upload-up-arrow-network",
	});
}

export default Component;
