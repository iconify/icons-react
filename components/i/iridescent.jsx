import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4x3cd_oo.css';

const viewBox = {"width":368,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4x3cd_oo"/>`,
		"fallback": "zmdi:iridescent",
	});
}

export default Component;
