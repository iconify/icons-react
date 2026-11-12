import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni8k4pbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni8k4pbjg"/>`,
		"fallback": "tabler:table-x",
	});
}

export default Component;
