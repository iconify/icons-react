import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onyo9ll8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onyo9ll8b"/>`,
		"fallback": "thesvg-color:osmand",
	});
}

export default Component;
