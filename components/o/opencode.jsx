import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwvch8b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwvch8b-k"/>`,
		"fallback": "thesvg-color:opencode",
	});
}

export default Component;
