import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvlknyuzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvlknyuzw"/>`,
		"fallback": "reicon:layout-filled",
	});
}

export default Component;
