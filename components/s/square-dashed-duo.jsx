import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-78pm1dc.css';
import '../../css/s/s146rvdmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-78pm1dc secondary"/><path class="primary s146rvdmi"/>`,
		"fallback": "iconaut:square-dashed-duo",
	});
}

export default Component;
