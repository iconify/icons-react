import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd67zjbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd67zjbxy"/>`,
		"fallback": "cbi:ondemand-aus",
	});
}

export default Component;
