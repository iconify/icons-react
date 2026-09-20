import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duf3r5bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="duf3r5bbs"/>`,
		"fallback": "streamline-freehand:share-megaphone",
	});
}

export default Component;
