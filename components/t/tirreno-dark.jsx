import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygo7n3bmd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygo7n3bmd"/>`,
		"fallback": "selfhst:tirreno-dark",
	});
}

export default Component;
