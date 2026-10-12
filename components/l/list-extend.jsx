import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smlq9pall.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smlq9pall"/>`,
		"fallback": "andrsrxn:list-extend",
	});
}

export default Component;
