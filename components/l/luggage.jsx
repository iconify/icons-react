import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xefzqe80a.css';
import '../../css/p/pd4p74bgj.css';
import '../../css/o/o3uxh1tfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xefzqe80a"/><rect class="pd4p74bgj"/><path class="o3uxh1tfl"/></g>`,
		"fallback": "andrsrxn:luggage",
	});
}

export default Component;
