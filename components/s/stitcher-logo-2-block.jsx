import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avv0vmbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="avv0vmbzc"/>`,
		"fallback": "streamline-logos:stitcher-logo-2-block",
	});
}

export default Component;
