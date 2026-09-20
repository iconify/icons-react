import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy-o-cb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy-o-cb9p"/>`,
		"fallback": "tdesign:user-password-filled",
	});
}

export default Component;
