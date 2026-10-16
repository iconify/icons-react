import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w80zo3biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w80zo3biu"/>`,
		"fallback": "ix:warning-multiple",
	});
}

export default Component;
