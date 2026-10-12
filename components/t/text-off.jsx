import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7vna507s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7vna507s"/>`,
		"fallback": "andrsrxn:text-off",
	});
}

export default Component;
