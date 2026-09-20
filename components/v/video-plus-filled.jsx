import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a36u_tb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a36u_tb3s"/>`,
		"fallback": "tabler:video-plus-filled",
	});
}

export default Component;
