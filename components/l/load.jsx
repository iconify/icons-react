import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkmrm2bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkmrm2bze"/>`,
		"fallback": "tdesign:load",
	});
}

export default Component;
