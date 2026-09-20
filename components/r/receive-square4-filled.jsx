import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqq1feb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqq1feb8s"/>`,
		"fallback": "reicon:receive-square4-filled",
	});
}

export default Component;
