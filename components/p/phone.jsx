import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqyhzd34c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqyhzd34c"/>`,
		"fallback": "heroicons-outline:phone",
	});
}

export default Component;
