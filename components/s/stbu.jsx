import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx-jwkb3l.css';
import '../../css/a/ackwpdbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx-jwkb3l"/><path class="ackwpdbbe"/>`,
		"fallback": "token:stbu",
	});
}

export default Component;
