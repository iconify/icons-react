import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwf3dab5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwf3dab5u"/>`,
		"fallback": "tdesign:media-library-filled",
	});
}

export default Component;
