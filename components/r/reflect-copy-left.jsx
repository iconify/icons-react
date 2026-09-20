import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/me6ttac7n.css';
import '../../css/v/vof8cccpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="me6ttac7n"/><path class="vof8cccpb"/></g>`,
		"fallback": "streamline-cyber:reflect-copy-left",
	});
}

export default Component;
