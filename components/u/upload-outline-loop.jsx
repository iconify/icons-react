import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/q/qu8zmn.css';
import '../../css/o/okiwoc.css';
import '../../css/d/d-viliiy.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c qu8zmn"/><path class="a0m25c okiwoc"/>`,
		"fallback": "line-md:upload-outline-loop",
	});
}

export default Component;
