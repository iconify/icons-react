import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcxaaqz_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcxaaqz_m primary"/>`,
		"fallback": "iconaut:number-2-duotone",
	});
}

export default Component;
