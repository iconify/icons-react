import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjy91kbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjy91kbrx"/>`,
		"fallback": "tabler:macro-filled",
	});
}

export default Component;
