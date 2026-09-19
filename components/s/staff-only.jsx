import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrfbt0b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrfbt0b5j"/>`,
		"fallback": "guidance:staff-only",
	});
}

export default Component;
