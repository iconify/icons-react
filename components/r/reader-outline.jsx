import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyolq2bek.css';
import '../../css/j/jo-7oophi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="vyolq2bek"/><path class="jo-7oophi"/>`,
		"fallback": "ion:reader-outline",
	});
}

export default Component;
