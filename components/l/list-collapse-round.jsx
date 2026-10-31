import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqcf44yln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqcf44yln"/>`,
		"fallback": "coolicons:list-collapse-round",
	});
}

export default Component;
