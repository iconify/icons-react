import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yze9kk29k.css';
import '../../css/v/vojar-box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yze9kk29k"/><path class="vojar-box"/>`,
		"fallback": "streamline-ultimate:monitor-download-bold",
	});
}

export default Component;
