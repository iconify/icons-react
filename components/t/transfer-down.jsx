import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytxgg-b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytxgg-b6a"/>`,
		"fallback": "lets-icons:transfer-down",
	});
}

export default Component;
