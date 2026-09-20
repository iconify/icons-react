import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt0j3ybxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt0j3ybxa"/>`,
		"fallback": "tdesign:user-safety-filled",
	});
}

export default Component;
