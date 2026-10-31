import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spj17bciu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spj17bciu"/>`,
		"fallback": "coolicons:navigation-alt-bulk-round",
	});
}

export default Component;
