import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz993v_go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz993v_go"/>`,
		"fallback": "cbi:tesla-lock",
	});
}

export default Component;
