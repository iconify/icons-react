import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_97fh9ip.css';
import '../../css/t/tng844zjk.css';
import '../../css/t/t78tuacut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_97fh9ip"/><path class="tng844zjk"/><path class="t78tuacut"/>`,
		"fallback": "tdesign:logo-cinema4d-filled",
	});
}

export default Component;
