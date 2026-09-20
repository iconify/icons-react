import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txcb39mcr.css';
import '../../css/r/r-o0ksbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txcb39mcr"/><path class="r-o0ksbhk"/>`,
		"fallback": "token:rare",
	});
}

export default Component;
