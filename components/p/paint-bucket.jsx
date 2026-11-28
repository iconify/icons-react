import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_jv0gbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_jv0gbds"/>`,
		"fallback": "noviair:paint-bucket",
	});
}

export default Component;
