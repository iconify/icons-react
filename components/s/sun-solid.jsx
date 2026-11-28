import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikcaxdbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikcaxdbil"/>`,
		"fallback": "iconaut:sun-solid",
	});
}

export default Component;
