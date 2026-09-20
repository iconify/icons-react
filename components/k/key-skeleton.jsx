import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaok-xlkj.css';
import '../../css/h/h5ggh0boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaok-xlkj"/><path class="h5ggh0boy"/>`,
		"fallback": "uim:key-skeleton",
	});
}

export default Component;
