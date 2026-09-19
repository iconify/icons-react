import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg76_7bbe.css';
import '../../css/m/m0b8pab-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer eg76_7bbe"/><path class="duoicon-secondary-layer m0b8pab-h"/>`,
		"fallback": "duo-icons:toggle",
	});
}

export default Component;
