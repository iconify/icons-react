import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5v7awbin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5v7awbin"/>`,
		"fallback": "selfhst:mashable-light",
	});
}

export default Component;
