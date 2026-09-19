import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg1_tcypd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg1_tcypd"/>`,
		"fallback": "feather:tool",
	});
}

export default Component;
