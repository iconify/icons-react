import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7izu_bcr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7izu_bcr"/>`,
		"fallback": "streamline-flex-color:pet-paw-flat",
	});
}

export default Component;
