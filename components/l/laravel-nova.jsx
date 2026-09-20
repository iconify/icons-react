import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf_qqhb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf_qqhb-h"/>`,
		"fallback": "thesvg-color:laravel-nova",
	});
}

export default Component;
