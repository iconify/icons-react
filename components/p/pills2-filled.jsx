import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liqt4ecgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liqt4ecgm"/>`,
		"fallback": "reicon:pills2-filled",
	});
}

export default Component;
