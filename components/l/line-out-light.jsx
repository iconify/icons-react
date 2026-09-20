import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbyykjb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbyykjb-p"/>`,
		"fallback": "lets-icons:line-out-light",
	});
}

export default Component;
