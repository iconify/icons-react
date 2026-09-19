import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn1qgzb1x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn1qgzb1x"/>`,
		"fallback": "cib:subversion",
	});
}

export default Component;
