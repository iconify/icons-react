import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4mc388uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y4mc388uz"/>`,
		"fallback": "reicon:sd-card-filled",
	});
}

export default Component;
