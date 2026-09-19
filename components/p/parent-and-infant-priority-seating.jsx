import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzpr2g3su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzpr2g3su"/>`,
		"fallback": "guidance:parent-and-infant-priority-seating",
	});
}

export default Component;
