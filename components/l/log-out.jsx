import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkr6qsb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kkr6qsb7a"/>`,
		"fallback": "griddy-icons:log-out",
	});
}

export default Component;
