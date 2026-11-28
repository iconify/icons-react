import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwk5qtb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary vwk5qtb5i"/>`,
		"fallback": "iconaut:person-walking-duotone",
	});
}

export default Component;
