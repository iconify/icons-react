import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/sgdoy1bsc.css';
import '../../css/j/jay0nmyki.css';
import '../../css/n/n7ax7tsfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="sgdoy1bsc"/><path class="jay0nmyki"/><path class="n7ax7tsfm"/></g>`,
		"fallback": "streamline-cyber:receipt-envelope",
	});
}

export default Component;
