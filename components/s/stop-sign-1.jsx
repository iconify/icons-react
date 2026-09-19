import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy_v726cn.css';
import '../../css/v/vz494t6ef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy_v726cn"/><path class="vz494t6ef"/>`,
		"fallback": "circum:stop-sign-1",
	});
}

export default Component;
