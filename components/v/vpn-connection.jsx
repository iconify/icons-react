import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sj513do2d.css';
import '../../css/z/z5kapcbco.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sj513do2d"/><path class="z5kapcbco"/></g>`,
		"fallback": "streamline:vpn-connection",
	});
}

export default Component;
