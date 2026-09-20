import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w64q5rbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w64q5rbfk"/>`,
		"fallback": "solar:speaker-outline",
	});
}

export default Component;
