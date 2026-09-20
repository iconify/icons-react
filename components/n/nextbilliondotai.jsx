import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exob21zxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exob21zxp"/>`,
		"fallback": "simple-icons:nextbilliondotai",
	});
}

export default Component;
