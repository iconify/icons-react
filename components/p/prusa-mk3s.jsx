import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfk8_9b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfk8_9b1f"/>`,
		"fallback": "cbi:prusa-mk3s",
	});
}

export default Component;
