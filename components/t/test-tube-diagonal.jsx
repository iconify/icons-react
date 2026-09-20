import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qot7jtzsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qot7jtzsz"/>`,
		"fallback": "keyline-icons:test-tube-diagonal",
	});
}

export default Component;
