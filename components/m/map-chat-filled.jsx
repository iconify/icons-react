import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw5gyubsx.css';
import '../../css/j/jjcq2bbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw5gyubsx"/><path class="jjcq2bbuw"/>`,
		"fallback": "tdesign:map-chat-filled",
	});
}

export default Component;
