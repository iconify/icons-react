import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbiaezbeq.css';
import '../../css/u/uy-3x3bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbiaezbeq"/><path class="uy-3x3bjx"/>`,
		"fallback": "octicon:square-circle-24",
	});
}

export default Component;
