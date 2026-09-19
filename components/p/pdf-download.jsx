import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n18j0phha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n18j0phha"/>`,
		"fallback": "griddy-icons:pdf-download",
	});
}

export default Component;
