import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hey2x6psv.css';

const viewBox = {"width":1280,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hey2x6psv"/>`,
		"fallback": "fa:viadeo",
	});
}

export default Component;
