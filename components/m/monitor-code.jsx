import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nne87hv2x.css';
import '../../css/b/bfaiweb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nne87hv2x"/><path class="bfaiweb6l"/>`,
		"fallback": "lineicons:monitor-code",
	});
}

export default Component;
