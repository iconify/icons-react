import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md78e4_pe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="md78e4_pe"/>`,
		"fallback": "streamline-freehand:loading-spinning-star",
	});
}

export default Component;
