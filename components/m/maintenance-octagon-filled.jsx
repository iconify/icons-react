import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twiaix3mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twiaix3mr"/>`,
		"fallback": "ix:maintenance-octagon-filled",
	});
}

export default Component;
