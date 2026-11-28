import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b868kmbdk.css';
import '../../css/v/vv4k3cbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b868kmbdk secondary"/><path class="primary vv4k3cbmf"/></g>`,
		"fallback": "iconaut:paint-bucket-duotone",
	});
}

export default Component;
