import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sne2kdbsx.css';
import '../../css/z/zd0f3cbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sne2kdbsx"/><path class="zd0f3cbpm"/></g>`,
		"fallback": "solar:undo-left-line-duotone",
	});
}

export default Component;
