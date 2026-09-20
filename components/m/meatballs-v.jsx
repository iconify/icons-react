import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvfm5p4nn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvfm5p4nn"/>`,
		"fallback": "quill:meatballs-v",
	});
}

export default Component;
