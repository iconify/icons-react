import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-jq7lsui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-jq7lsui"/>`,
		"fallback": "bxl:stack-overflow",
	});
}

export default Component;
