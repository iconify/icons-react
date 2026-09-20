import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzt-hibdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzt-hibdz"/>`,
		"fallback": "simple-icons:waze",
	});
}

export default Component;
