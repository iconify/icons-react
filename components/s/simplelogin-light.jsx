import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je0d-9t6x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je0d-9t6x"/>`,
		"fallback": "selfhst:simplelogin-light",
	});
}

export default Component;
