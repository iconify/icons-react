import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf8a_mbal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf8a_mbal"/>`,
		"fallback": "simple-icons:veeam",
	});
}

export default Component;
