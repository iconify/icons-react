import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/y/ysjvvlbsv.css';
import '../../css/l/l73okraoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle class="ysjvvlbsv"/><path class="l73okraoi"/></g>`,
		"fallback": "lets-icons:search-alt-duotone-line",
	});
}

export default Component;
