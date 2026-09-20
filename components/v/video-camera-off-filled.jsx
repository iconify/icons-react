import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk3-2qb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk3-2qb5j"/>`,
		"fallback": "tdesign:video-camera-off-filled",
	});
}

export default Component;
