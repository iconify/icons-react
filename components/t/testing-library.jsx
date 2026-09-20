import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpx7c3bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpx7c3bsw"/>`,
		"fallback": "thesvg-color:testing-library",
	});
}

export default Component;
