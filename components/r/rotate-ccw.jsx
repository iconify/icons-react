import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzudws-br.css';
import '../../css/n/nnhz2fbfy.css';
import '../../css/f/f26-q2vvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzudws-br wm-shadow"/><path class="nnhz2fbfy wm-k"/><path class="f26-q2vvv wm-k"/>`,
		"fallback": "withicons-pastel:rotate-ccw",
	});
}

export default Component;
