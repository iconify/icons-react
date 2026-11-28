import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/magl1uyfs.css';
import '../../css/x/xi__f08nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="magl1uyfs secondary"/><path class="primary xi__f08nm"/></g>`,
		"fallback": "iconaut:tag-duotone",
	});
}

export default Component;
