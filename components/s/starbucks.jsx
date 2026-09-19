import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqvo98owy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqvo98owy"/>`,
		"fallback": "cbi:starbucks",
	});
}

export default Component;
