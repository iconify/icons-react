import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh5ame3kv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh5ame3kv"/>`,
		"fallback": "thesvg:taskade",
	});
}

export default Component;
