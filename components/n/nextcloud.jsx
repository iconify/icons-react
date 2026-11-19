import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7lio-b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7lio-b1f"/>`,
		"fallback": "cbi:nextcloud",
	});
}

export default Component;
