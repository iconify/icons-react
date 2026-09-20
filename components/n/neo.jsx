import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we76vsw_m.css';
import '../../css/b/blpilfbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we76vsw_m"/><path class="blpilfbkk"/>`,
		"fallback": "token:neo",
	});
}

export default Component;
