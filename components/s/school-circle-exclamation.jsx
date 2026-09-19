import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9bqularh.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9bqularh"/>`,
		"fallback": "fa6-solid:school-circle-exclamation",
	});
}

export default Component;
