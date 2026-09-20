import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6la11b1v.css';
import '../../css/o/okcf14hbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6la11b1v"/><path class="okcf14hbm"/>`,
		"fallback": "streamline-freehand:search-magnifier",
	});
}

export default Component;
