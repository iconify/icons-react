import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8w19bbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8w19bbsg"/>`,
		"fallback": "cbi:nanoleaf-permanent-outdoor-light",
	});
}

export default Component;
