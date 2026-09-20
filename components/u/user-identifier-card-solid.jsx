import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv2rulbdl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cv2rulbdl"/>`,
		"fallback": "streamline:user-identifier-card-solid",
	});
}

export default Component;
