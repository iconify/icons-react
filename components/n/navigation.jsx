import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1ygy4hxh.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1ygy4hxh"/>`,
		"fallback": "whh:navigation",
	});
}

export default Component;
