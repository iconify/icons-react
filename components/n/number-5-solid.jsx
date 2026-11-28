import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxo5b6gwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxo5b6gwc"/>`,
		"fallback": "iconaut:number-5-solid",
	});
}

export default Component;
