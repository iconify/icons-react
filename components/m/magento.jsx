import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjkt2jb4k.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjkt2jb4k"/>`,
		"fallback": "whh:magento",
	});
}

export default Component;
