import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3g8599er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="l3g8599er"/>`,
		"fallback": "akar-icons:square",
	});
}

export default Component;
