import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8_xspb3x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8_xspb3x"/>`,
		"fallback": "ep:video-camera",
	});
}

export default Component;
