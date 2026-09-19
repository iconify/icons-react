import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu2f4lpfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zu2f4lpfg"/>`,
		"fallback": "griddy-icons:user-email-filled",
	});
}

export default Component;
