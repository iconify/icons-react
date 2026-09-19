import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu4wq-mek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu4wq-mek"/>`,
		"fallback": "guidance:no-electric-scooter",
	});
}

export default Component;
