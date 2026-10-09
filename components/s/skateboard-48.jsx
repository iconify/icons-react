import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zor6y16jx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zor6y16jx"/>`,
		"fallback": "energy-icons:skateboard-48",
	});
}

export default Component;
