import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5d1hw8os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5d1hw8os"/>`,
		"fallback": "weui:tv-outlined",
	});
}

export default Component;
