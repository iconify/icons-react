import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqwmo6byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqwmo6byc"/>`,
		"fallback": "mingcute:thought-line",
	});
}

export default Component;
