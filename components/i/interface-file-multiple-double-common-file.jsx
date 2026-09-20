import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e739tyt3r.css';
import '../../css/w/wummlp8ur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="e739tyt3r"/><path class="wummlp8ur"/></g>`,
		"fallback": "streamline:interface-file-multiple-double-common-file",
	});
}

export default Component;
