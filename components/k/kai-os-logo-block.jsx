import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0v2wcciq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b0v2wcciq"/>`,
		"fallback": "streamline-logos:kai-os-logo-block",
	});
}

export default Component;
