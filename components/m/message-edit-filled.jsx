import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxbu_zb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxbu_zb7z"/>`,
		"fallback": "reicon:message-edit-filled",
	});
}

export default Component;
