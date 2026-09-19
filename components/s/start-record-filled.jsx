import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd5-fzb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd5-fzb7z"/>`,
		"fallback": "griddy-icons:start-record-filled",
	});
}

export default Component;
