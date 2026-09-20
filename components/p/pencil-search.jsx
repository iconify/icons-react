import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnq9-21ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnq9-21ay"/>`,
		"fallback": "tabler:pencil-search",
	});
}

export default Component;
