import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjo68qbsq.css';
import '../../css/u/uhso3bbfp.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjo68qbsq"/><path class="uhso3bbfp"/>`,
		"fallback": "foundation:page-filled",
	});
}

export default Component;
