import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmlpbrb-y.css';
import '../../css/p/pu7grmbmu.css';
import '../../css/x/xvnjn7ufi.css';
import '../../css/v/vs_shhbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nmlpbrb-y"/><path class="pu7grmbmu"/><path class="xvnjn7ufi"/><path class="vs_shhbnp"/></g>`,
		"fallback": "streamline-cyber-color:shopping-cart-upload-2",
	});
}

export default Component;
