import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b225b0bzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b225b0bzl"/>`,
		"fallback": "selfhst:noton-light",
	});
}

export default Component;
