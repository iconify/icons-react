import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4l6txb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4l6txb8t"/>`,
		"fallback": "reicon:suspension-filled",
	});
}

export default Component;
