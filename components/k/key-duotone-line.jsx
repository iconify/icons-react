import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/i/iu6f4fumb.css';
import '../../css/z/zs-5weoak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle class="iu6f4fumb"/><path class="zs-5weoak"/></g>`,
		"fallback": "lets-icons:key-duotone-line",
	});
}

export default Component;
