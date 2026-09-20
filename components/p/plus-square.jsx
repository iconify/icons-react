import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p74y-9bqn.css';
import '../../css/d/d_twzvgsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p74y-9bqn"/><path class="d_twzvgsw"/>`,
		"fallback": "uim:plus-square",
	});
}

export default Component;
