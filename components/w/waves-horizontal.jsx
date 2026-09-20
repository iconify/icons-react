import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsj-ypelj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsj-ypelj"/>`,
		"fallback": "lucide:waves-horizontal",
	});
}

export default Component;
