import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfcghdbkz.css';
import '../../css/y/ycfegbxjl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="cfcghdbkz"/><path class="ycfegbxjl"/>`,
		"fallback": "selfhst:passonce",
	});
}

export default Component;
