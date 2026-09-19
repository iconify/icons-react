import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pni8y54yt.css';

const viewBox = {"width":384,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pni8y54yt"/>`,
		"fallback": "whh:mootools",
	});
}

export default Component;
