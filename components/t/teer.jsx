import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub35knbuk.css';
import '../../css/d/d_qmu7ifq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub35knbuk"/><path class="d_qmu7ifq"/>`,
		"fallback": "token:teer",
	});
}

export default Component;
