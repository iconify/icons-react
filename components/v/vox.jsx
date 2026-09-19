import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yedb5g6ap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yedb5g6ap"/>`,
		"fallback": "cbi:vox",
	});
}

export default Component;
