import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk67zg56m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk67zg56m"/>`,
		"fallback": "reicon:medal4-filled",
	});
}

export default Component;
