import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbd8do5tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbd8do5tr"/>`,
		"fallback": "iconaut:pilcrow-left-solid",
	});
}

export default Component;
