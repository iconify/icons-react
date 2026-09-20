import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o926j9btv.css';
import '../../css/g/gvg2fzbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o926j9btv"/><path class="gvg2fzbgr"/></g>`,
		"fallback": "tdesign:pen-mark",
	});
}

export default Component;
