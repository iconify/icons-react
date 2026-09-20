import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/g/grxwkbb-g.css';
import '../../css/u/uyc8jvbul.css';
import '../../css/t/taun3cbga.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="grxwkbb-g"/><path class="uyc8jvbul"/><path class="taun3cbga"/></g>`,
		"fallback": "streamline-plump:mail-notification",
	});
}

export default Component;
