import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy0-_fo1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy0-_fo1g"/>`,
		"fallback": "lets-icons:oil-light",
	});
}

export default Component;
