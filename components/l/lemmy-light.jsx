import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hakkz4bhi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hakkz4bhi"/>`,
		"fallback": "selfhst:lemmy-light",
	});
}

export default Component;
