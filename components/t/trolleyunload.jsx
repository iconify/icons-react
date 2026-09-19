import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa3knwb2w.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa3knwb2w"/>`,
		"fallback": "whh:trolleyunload",
	});
}

export default Component;
