import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv6k1030q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv6k1030q"/>`,
		"fallback": "streamline-ultimate:keyboard-asterisk-1",
	});
}

export default Component;
