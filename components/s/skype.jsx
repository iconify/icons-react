import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-p0k3n1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-p0k3n1j"/>`,
		"fallback": "bxl:skype",
	});
}

export default Component;
