import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj5b2hbei.css';
import '../../css/f/f4eetr8fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj5b2hbei"/><path class="f4eetr8fi"/>`,
		"fallback": "solar:pie-chart-2-bold-duotone",
	});
}

export default Component;
