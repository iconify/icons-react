import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye3f1bcxd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye3f1bcxd"/>`,
		"fallback": "whh:maximize",
	});
}

export default Component;
