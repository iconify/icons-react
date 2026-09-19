import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef7owseox.css';
import '../../css/z/zan_i8btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef7owseox"/><path class="zan_i8btj"/>`,
		"fallback": "circum:square-minus",
	});
}

export default Component;
