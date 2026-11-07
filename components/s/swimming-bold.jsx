import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6-bybb5v.css';
import '../../css/j/jfhqsv3mp.css';
import '../../css/q/qddp9ybsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s6-bybb5v"/><path class="jfhqsv3mp"/><path class="qddp9ybsf"/>`,
		"fallback": "solar:swimming-bold",
	});
}

export default Component;
