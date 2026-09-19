import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkfbdfbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkfbdfbql"/>`,
		"fallback": "iconamoon:number-9-thin",
	});
}

export default Component;
