import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myf67vu-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myf67vu-p"/>`,
		"fallback": "reicon:minus3-filled",
	});
}

export default Component;
