import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjf14cbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjf14cbyt"/>`,
		"fallback": "boxicons:menorah",
	});
}

export default Component;
