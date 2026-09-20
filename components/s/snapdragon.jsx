import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb8yn-bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb8yn-bbs"/>`,
		"fallback": "simple-icons:snapdragon",
	});
}

export default Component;
