import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlh7cz39f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlh7cz39f"/>`,
		"fallback": "fe:smile-plus",
	});
}

export default Component;
