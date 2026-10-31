import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk6n9fbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk6n9fbwj"/>`,
		"fallback": "coolicons:soccer-ball-fill-round",
	});
}

export default Component;
