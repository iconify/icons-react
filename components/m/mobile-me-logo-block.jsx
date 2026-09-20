import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzx0rv3rl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kzx0rv3rl"/>`,
		"fallback": "streamline-logos:mobile-me-logo-block",
	});
}

export default Component;
