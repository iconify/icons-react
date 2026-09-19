import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko01m9x0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko01m9x0n"/>`,
		"fallback": "cbi:tablet",
	});
}

export default Component;
