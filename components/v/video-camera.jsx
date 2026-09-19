import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpbx2xb3r.css';

const viewBox = {"width":384,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpbx2xb3r"/>`,
		"fallback": "ps:video-camera",
	});
}

export default Component;
