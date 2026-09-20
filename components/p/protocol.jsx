import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adqshw3kj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adqshw3kj"/>`,
		"fallback": "ix:protocol",
	});
}

export default Component;
