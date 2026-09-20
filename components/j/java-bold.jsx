import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljbam2wib.css';
import '../../css/y/y_q6-lbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljbam2wib"/><path class="y_q6-lbfk"/>`,
		"fallback": "streamline-ultimate:java-bold",
	});
}

export default Component;
