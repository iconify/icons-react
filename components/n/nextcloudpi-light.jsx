import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymi_3kb1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymi_3kb1k"/>`,
		"fallback": "selfhst:nextcloudpi-light",
	});
}

export default Component;
