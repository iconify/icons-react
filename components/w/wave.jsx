import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yig-g3btl.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yig-g3btl"/>`,
		"fallback": "picon:wave",
	});
}

export default Component;
