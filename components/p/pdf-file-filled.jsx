import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8s7p28am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t8s7p28am"/>`,
		"fallback": "griddy-icons:pdf-file-filled",
	});
}

export default Component;
