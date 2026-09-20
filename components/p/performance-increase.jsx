import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngrep6yjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngrep6yjk"/>`,
		"fallback": "streamline-ultimate:performance-increase",
	});
}

export default Component;
