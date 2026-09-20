import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vai96navg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vai96navg"/>`,
		"fallback": "uil:sync-slash",
	});
}

export default Component;
