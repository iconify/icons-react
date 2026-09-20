import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eosvwsbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eosvwsbgy"/>`,
		"fallback": "nrk:media-volume-3",
	});
}

export default Component;
