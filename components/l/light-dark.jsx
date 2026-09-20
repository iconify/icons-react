import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob3ywpbnl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob3ywpbnl"/>`,
		"fallback": "ix:light-dark",
	});
}

export default Component;
