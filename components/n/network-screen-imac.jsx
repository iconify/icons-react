import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a8oimli_z.css';
import '../../css/a/a2l17su7b.css';
import '../../css/y/y5fthqeme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a8oimli_z"/><path class="a2l17su7b"/><path class="y5fthqeme"/></g>`,
		"fallback": "streamline-cyber-color:network-screen-imac",
	});
}

export default Component;
