import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wctb7iqlf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wctb7iqlf"/>`,
		"fallback": "streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right",
	});
}

export default Component;
