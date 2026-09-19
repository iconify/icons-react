import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2k121bbm.css';
import '../../css/c/c28fqubye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2k121bbm"/><path class="c28fqubye"/>`,
		"fallback": "boxicons:rotate-cw-dot",
	});
}

export default Component;
