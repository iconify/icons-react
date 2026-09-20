import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grr2lyqiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grr2lyqiy"/>`,
		"fallback": "thesvg-color:uservoice",
	});
}

export default Component;
