import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxzsicboc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxzsicboc"/>`,
		"fallback": "ix:screenshot-filled",
	});
}

export default Component;
