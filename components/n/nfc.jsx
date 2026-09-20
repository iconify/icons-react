import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vubt_7biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vubt_7biv"/>`,
		"fallback": "thesvg-color:nfc",
	});
}

export default Component;
