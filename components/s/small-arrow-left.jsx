import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2yezpb3v.css';

const viewBox = {"width":210,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2yezpb3v"/>`,
		"fallback": "il:small-arrow-left",
	});
}

export default Component;
