import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esa6zfg6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esa6zfg6u"/>`,
		"fallback": "coolicons:note-download-corner-round",
	});
}

export default Component;
