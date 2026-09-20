import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m09d6vbka.css';
import '../../css/c/ch7ch5xat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m09d6vbka"/><path class="ch7ch5xat"/></g>`,
		"fallback": "solar:notification-lines-remove-bold",
	});
}

export default Component;
