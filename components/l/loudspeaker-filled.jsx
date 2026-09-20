import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0d1xbb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0d1xbb1r"/>`,
		"fallback": "tdesign:loudspeaker-filled",
	});
}

export default Component;
