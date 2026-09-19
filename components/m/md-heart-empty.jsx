import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0bay2vht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0bay2vht"/>`,
		"fallback": "ion:md-heart-empty",
	});
}

export default Component;
