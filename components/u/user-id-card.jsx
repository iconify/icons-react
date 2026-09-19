import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiqwlw-9v.css';
import '../../css/y/y3t9q1bdx.css';
import '../../css/c/c76eisdpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiqwlw-9v"/><path class="y3t9q1bdx"/><path class="c76eisdpd"/>`,
		"fallback": "boxicons:user-id-card",
	});
}

export default Component;
