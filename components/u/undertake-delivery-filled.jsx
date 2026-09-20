import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an5gq2bey.css';
import '../../css/j/jy91cz49o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an5gq2bey"/><path class="jy91cz49o"/>`,
		"fallback": "tdesign:undertake-delivery-filled",
	});
}

export default Component;
