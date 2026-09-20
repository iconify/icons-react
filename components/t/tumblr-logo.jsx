import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldyatl2-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldyatl2-l"/>`,
		"fallback": "streamline-logos:tumblr-logo",
	});
}

export default Component;
