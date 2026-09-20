import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxav8w73h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxav8w73h"/>`,
		"fallback": "ri:logout-circle-fill",
	});
}

export default Component;
