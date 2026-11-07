import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae_fwibxk.css';
import '../../css/a/a_tf9kbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae_fwibxk"/><path class="a_tf9kbuk"/>`,
		"fallback": "solar:link-circle-outline",
	});
}

export default Component;
