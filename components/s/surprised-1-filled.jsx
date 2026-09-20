import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewlmo7vkk.css';
import '../../css/m/m3wlzfy-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewlmo7vkk"/><path class="m3wlzfy-p"/>`,
		"fallback": "tdesign:surprised-1-filled",
	});
}

export default Component;
