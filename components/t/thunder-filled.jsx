import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv2mi3g-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv2mi3g-r"/>`,
		"fallback": "boxicons:thunder-filled",
	});
}

export default Component;
