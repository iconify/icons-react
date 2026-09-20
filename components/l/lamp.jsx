import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee09_gb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee09_gb5g"/>`,
		"fallback": "mynaui:lamp",
	});
}

export default Component;
