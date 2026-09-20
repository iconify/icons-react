import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2gyfudfs.css';
import '../../css/b/b5kui9phr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2gyfudfs"/><path class="b5kui9phr"/>`,
		"fallback": "ooui:ongoing-conversation-ltr",
	});
}

export default Component;
