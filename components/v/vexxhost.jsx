import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndded1bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndded1bbz"/>`,
		"fallback": "thesvg-color:vexxhost",
	});
}

export default Component;
