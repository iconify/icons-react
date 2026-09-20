import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-jb5hbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-jb5hbwd"/>`,
		"fallback": "streamline-logos:mobile-me-logo",
	});
}

export default Component;
