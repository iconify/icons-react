import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiasnzb7m.css';
import '../../css/k/kai3g5bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiasnzb7m"/><path class="kai3g5bwf"/>`,
		"fallback": "boxicons:taxi",
	});
}

export default Component;
