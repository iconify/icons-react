import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmx0tgbbf.css';
import '../../css/m/mxx-s1b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmx0tgbbf"/><path class="mxx-s1b4w"/>`,
		"fallback": "token:lym",
	});
}

export default Component;
