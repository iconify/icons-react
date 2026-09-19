import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i97yjjbma.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i97yjjbma"/>`,
		"fallback": "carbon:package-node",
	});
}

export default Component;
