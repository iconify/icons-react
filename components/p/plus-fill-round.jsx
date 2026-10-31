import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgr9h6b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgr9h6b5b"/>`,
		"fallback": "coolicons:plus-fill-round",
	});
}

export default Component;
