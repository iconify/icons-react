import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0imudn6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0imudn6m"/>`,
		"fallback": "cbi:spotbear-round-n16r8",
	});
}

export default Component;
