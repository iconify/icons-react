import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tns77oa9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tns77oa9e"/>`,
		"fallback": "streamline-sharp:warning-shield",
	});
}

export default Component;
