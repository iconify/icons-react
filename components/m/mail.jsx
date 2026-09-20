import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgs6gwb0y.css';
import '../../css/o/o5uaqla1a.css';
import '../../css/y/yns7dfelz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xgs6gwb0y"/><path class="o5uaqla1a"/><path class="yns7dfelz"/></g>`,
		"fallback": "tdesign:mail",
	});
}

export default Component;
