import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su9e4nbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="su9e4nbah"/>`,
		"fallback": "reicon:routing-2-filled",
	});
}

export default Component;
