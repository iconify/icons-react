import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhx0khm2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rhx0khm2p"/>`,
		"fallback": "healthicons:q",
	});
}

export default Component;
