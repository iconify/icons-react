import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/g/g9p73j6_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="zv6cqnbnp"/><path class="g9p73j6_u"/></g>`,
		"fallback": "akar-icons:location",
	});
}

export default Component;
