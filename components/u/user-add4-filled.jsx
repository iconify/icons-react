import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdy4ny49e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdy4ny49e"/>`,
		"fallback": "reicon:user-add4-filled",
	});
}

export default Component;
