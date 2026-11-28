import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwq97u3ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwq97u3ki"/>`,
		"fallback": "noviair:tennis-ball",
	});
}

export default Component;
