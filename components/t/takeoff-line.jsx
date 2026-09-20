import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwxp84b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwxp84b-f"/>`,
		"fallback": "si:takeoff-line",
	});
}

export default Component;
