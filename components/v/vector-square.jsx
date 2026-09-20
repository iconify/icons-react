import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwa63hvmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwa63hvmq"/>`,
		"fallback": "uis:vector-square",
	});
}

export default Component;
