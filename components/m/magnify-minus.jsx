import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7i4a3eqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7i4a3eqg"/>`,
		"fallback": "mdi-light:magnify-minus",
	});
}

export default Component;
