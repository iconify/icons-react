import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkh1hqb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkh1hqb0l"/>`,
		"fallback": "boxicons:shadows",
	});
}

export default Component;
