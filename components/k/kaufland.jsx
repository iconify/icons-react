import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztgohcc8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztgohcc8w"/>`,
		"fallback": "thesvg-color:kaufland",
	});
}

export default Component;
