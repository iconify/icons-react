import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3x4476xd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3x4476xd"/>`,
		"fallback": "carbon:list-numbered-mirror",
	});
}

export default Component;
