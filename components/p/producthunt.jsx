import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fubs2opfz.css';
import '../../css/q/qxbtx8ztn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fubs2opfz"/><path class="qxbtx8ztn"/>`,
		"fallback": "lineicons:producthunt",
	});
}

export default Component;
