import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4q_z4btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f4q_z4btv"/>`,
		"fallback": "streamline-logos:rdio-logo-block",
	});
}

export default Component;
