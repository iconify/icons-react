import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya7p20b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya7p20b_c"/>`,
		"fallback": "iconoir:numbered-list-left",
	});
}

export default Component;
