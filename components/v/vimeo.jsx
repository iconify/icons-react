import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agfd4ibou.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agfd4ibou"/>`,
		"fallback": "topcoat:vimeo",
	});
}

export default Component;
