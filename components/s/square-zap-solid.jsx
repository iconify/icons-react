import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cscje9bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cscje9bgk"/>`,
		"fallback": "iconaut:square-zap-solid",
	});
}

export default Component;
