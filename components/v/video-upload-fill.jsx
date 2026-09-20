import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydkqw95qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydkqw95qj"/>`,
		"fallback": "mage:video-upload-fill",
	});
}

export default Component;
