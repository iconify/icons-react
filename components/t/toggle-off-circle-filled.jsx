import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_zj9e2le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_zj9e2le"/>`,
		"fallback": "reicon:toggle-off-circle-filled",
	});
}

export default Component;
