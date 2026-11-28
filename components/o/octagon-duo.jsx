import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slknnlbbl.css';
import '../../css/s/s8ywqlbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary slknnlbbl"/><path class="primary s8ywqlbta"/>`,
		"fallback": "iconaut:octagon-duo",
	});
}

export default Component;
