import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykbp4l_cp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykbp4l_cp"/>`,
		"fallback": "ri:verified-badge-line",
	});
}

export default Component;
