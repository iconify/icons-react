import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaw0jcbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaw0jcbdl"/>`,
		"fallback": "uil:presentation-edit",
	});
}

export default Component;
