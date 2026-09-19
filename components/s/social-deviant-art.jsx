import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqsw8ihjc.css';
import '../../css/i/iue9lzdei.css';
import '../../css/i/ipgwi6qyg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqsw8ihjc"/><path class="iue9lzdei"/><path class="ipgwi6qyg"/>`,
		"fallback": "foundation:social-deviant-art",
	});
}

export default Component;
