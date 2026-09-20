import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4-wo40im.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4-wo40im"/>`,
		"fallback": "selfhst:neodb-light",
	});
}

export default Component;
