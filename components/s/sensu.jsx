import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxbs46g8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxbs46g8n"/>`,
		"fallback": "thesvg-color:sensu",
	});
}

export default Component;
