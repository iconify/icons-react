import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tffxk6toi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tffxk6toi"/>`,
		"fallback": "tdesign:user-unlocked-filled",
	});
}

export default Component;
