import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6r4aboh.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj6r4aboh"/>`,
		"fallback": "academicons:pubpeer-square",
	});
}

export default Component;
