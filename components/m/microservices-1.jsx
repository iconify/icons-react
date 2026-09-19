import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iexxgd58y.css';
import '../../css/x/x8r3bo3uc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iexxgd58y"/><path class="x8r3bo3uc"/>`,
		"fallback": "carbon:microservices-1",
	});
}

export default Component;
