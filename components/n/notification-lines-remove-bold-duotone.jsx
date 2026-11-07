import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1b-v8rmi.css';
import '../../css/w/whbeue6my.css';
import '../../css/a/at92h2-kh.css';
import '../../css/c/ch9w-bbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1b-v8rmi"/><path class="whbeue6my"/><path clip-rule="evenodd" class="at92h2-kh"/><path class="ch9w-bbsi"/>`,
		"fallback": "solar:notification-lines-remove-bold-duotone",
	});
}

export default Component;
