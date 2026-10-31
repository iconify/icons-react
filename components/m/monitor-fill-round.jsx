import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu4mob-9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu4mob-9u"/>`,
		"fallback": "coolicons:monitor-fill-round",
	});
}

export default Component;
