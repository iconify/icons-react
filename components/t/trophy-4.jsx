import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vufce9byw.css';
import '../../css/t/tbofzubjt.css';
import '../../css/i/iqc2m-baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vufce9byw"/><path class="tbofzubjt"/><path class="iqc2m-baa"/></g>`,
		"fallback": "streamline-cyber-color:trophy-4",
	});
}

export default Component;
