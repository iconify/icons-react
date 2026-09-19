import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzwym2bqd.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzwym2bqd"/>`,
		"fallback": "topcoat:like",
	});
}

export default Component;
