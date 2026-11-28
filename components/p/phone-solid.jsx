import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bypk2g5eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bypk2g5eg"/>`,
		"fallback": "iconaut:phone-solid",
	});
}

export default Component;
