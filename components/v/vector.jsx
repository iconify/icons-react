import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwqm4xb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwqm4xb7a"/>`,
		"fallback": "boxicons:vector",
	});
}

export default Component;
