import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvvcmoqrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvvcmoqrm"/>`,
		"fallback": "ri:remote-control-line",
	});
}

export default Component;
