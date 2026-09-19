import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6f5--b2i.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6f5--b2i"/>`,
		"fallback": "fontisto:snowflake-5",
	});
}

export default Component;
