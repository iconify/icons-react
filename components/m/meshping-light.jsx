import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx4w7qbys.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx4w7qbys"/>`,
		"fallback": "selfhst:meshping-light",
	});
}

export default Component;
