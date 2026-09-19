import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-y4uq50q.css';
import '../../css/v/v4bg1ccwj.css';
import '../../css/z/zlnvfbcfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-y4uq50q"/><path class="v4bg1ccwj"/><path class="zlnvfbcfc"/>`,
		"fallback": "boxicons:rfid-filled",
	});
}

export default Component;
