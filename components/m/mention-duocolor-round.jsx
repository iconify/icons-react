import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf6m0mjdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf6m0mjdi"/>`,
		"fallback": "coolicons:mention-duocolor-round",
	});
}

export default Component;
