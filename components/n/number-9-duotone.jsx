import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbkck_nrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbkck_nrq primary"/>`,
		"fallback": "iconaut:number-9-duotone",
	});
}

export default Component;
