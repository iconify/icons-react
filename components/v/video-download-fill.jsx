import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xahzi_p2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xahzi_p2k"/>`,
		"fallback": "ri:video-download-fill",
	});
}

export default Component;
