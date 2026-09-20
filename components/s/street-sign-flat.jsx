import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whj-jbbgt.css';
import '../../css/x/xwieq1lbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whj-jbbgt"/><path class="xwieq1lbp"/></g>`,
		"fallback": "streamline-sharp-color:street-sign-flat",
	});
}

export default Component;
