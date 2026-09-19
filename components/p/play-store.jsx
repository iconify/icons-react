import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvw_whb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvw_whb9g"/>`,
		"fallback": "bxl:play-store",
	});
}

export default Component;
