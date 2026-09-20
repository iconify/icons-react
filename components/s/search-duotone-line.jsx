import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/y/ysjvvlbsv.css';
import '../../css/m/mvo2n9bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle class="ysjvvlbsv"/><path class="mvo2n9bru"/></g>`,
		"fallback": "lets-icons:search-duotone-line",
	});
}

export default Component;
