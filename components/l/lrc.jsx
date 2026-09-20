import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so9w1vbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so9w1vbig"/>`,
		"fallback": "token:lrc",
	});
}

export default Component;
