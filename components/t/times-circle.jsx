import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0_sj-vvr.css';
import '../../css/m/maum05bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0_sj-vvr"/><path class="maum05bfh"/>`,
		"fallback": "uim:times-circle",
	});
}

export default Component;
