import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sck_21-ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sck_21-ib"/>`,
		"fallback": "iconaut:paintbrush-solid",
	});
}

export default Component;
