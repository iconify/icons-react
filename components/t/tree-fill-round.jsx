import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjg_cfqen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjg_cfqen"/>`,
		"fallback": "coolicons:tree-fill-round",
	});
}

export default Component;
