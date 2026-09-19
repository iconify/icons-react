import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luecgc8hn.css';

const viewBox = {"width":448,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luecgc8hn"/>`,
		"fallback": "whh:manalt",
	});
}

export default Component;
