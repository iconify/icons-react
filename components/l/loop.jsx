import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iypdcyvhg.css';
import '../../css/u/ue-60pbsu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iypdcyvhg"/><path class="ue-60pbsu"/>`,
		"fallback": "ion:loop",
	});
}

export default Component;
