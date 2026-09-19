import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh5ar3jyu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh5ar3jyu"/>`,
		"fallback": "fluent-mdl2:merge-duplicate",
	});
}

export default Component;
