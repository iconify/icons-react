import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i16-6_lek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i16-6_lek"/>`,
		"fallback": "streamline-ultimate:move-down-1",
	});
}

export default Component;
