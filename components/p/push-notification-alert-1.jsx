import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2ugmubyk.css';
import '../../css/c/cuvwpsbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2ugmubyk"/><path class="cuvwpsbya"/>`,
		"fallback": "streamline-freehand:push-notification-alert-1",
	});
}

export default Component;
