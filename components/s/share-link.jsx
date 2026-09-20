import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iwx5-7wia.css';
import '../../css/z/zh3o0hkcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="iwx5-7wia"/><path class="zh3o0hkcq"/></g>`,
		"fallback": "streamline-plump-color:share-link",
	});
}

export default Component;
