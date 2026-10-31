import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqn404ock.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqn404ock"/>`,
		"fallback": "coolicons:ratio-1-1-bulk-round",
	});
}

export default Component;
