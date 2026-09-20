import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itsabwu7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itsabwu7a"/>`,
		"fallback": "tdesign:user-business-filled",
	});
}

export default Component;
