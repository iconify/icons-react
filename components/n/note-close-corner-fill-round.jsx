import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voweq_oeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voweq_oeh"/>`,
		"fallback": "coolicons:note-close-corner-fill-round",
	});
}

export default Component;
