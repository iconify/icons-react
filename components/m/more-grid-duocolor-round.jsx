import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in7g9uh7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in7g9uh7i"/>`,
		"fallback": "coolicons:more-grid-duocolor-round",
	});
}

export default Component;
