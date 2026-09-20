import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuy6n6bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuy6n6bru"/>`,
		"fallback": "tabler:upload",
	});
}

export default Component;
