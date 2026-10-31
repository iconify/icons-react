import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fold3jzin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fold3jzin"/>`,
		"fallback": "coolicons:slack-round",
	});
}

export default Component;
