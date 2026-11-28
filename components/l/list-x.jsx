import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynwb_uh6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynwb_uh6y"/>`,
		"fallback": "noviair-light:list-x",
	});
}

export default Component;
