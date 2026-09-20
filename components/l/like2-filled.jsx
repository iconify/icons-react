import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pro3-no3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pro3-no3v"/>`,
		"fallback": "reicon:like2-filled",
	});
}

export default Component;
