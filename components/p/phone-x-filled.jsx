import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouv-3on5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouv-3on5x"/>`,
		"fallback": "tabler:phone-x-filled",
	});
}

export default Component;
