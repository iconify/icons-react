import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnnw44bzb.css';
import '../../css/q/q810p6bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vnnw44bzb"/><path class="q810p6bpn"/>`,
		"fallback": "stash:reading-time-duotone",
	});
}

export default Component;
