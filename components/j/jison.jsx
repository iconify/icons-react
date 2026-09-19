import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq15jlb1x.css';

const viewBox = {"width":473,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq15jlb1x"/>`,
		"fallback": "file-icons:jison",
	});
}

export default Component;
