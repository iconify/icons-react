import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww0w2tjgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww0w2tjgz"/>`,
		"fallback": "tabler:phone-check-filled",
	});
}

export default Component;
