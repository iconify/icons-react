import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va3pi2mwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va3pi2mwz"/>`,
		"fallback": "tdesign:sound-down-filled",
	});
}

export default Component;
