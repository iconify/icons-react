import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjkn6nbgz.css';
import '../../css/e/e90szm-te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjkn6nbgz"/><path class="e90szm-te"/>`,
		"fallback": "solar:recive-twice-square-bold-duotone",
	});
}

export default Component;
