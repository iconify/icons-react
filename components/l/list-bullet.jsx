import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmvzf6b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmvzf6b1d"/>`,
		"fallback": "nrk:list-bullet",
	});
}

export default Component;
