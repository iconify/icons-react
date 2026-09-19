import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1vsmrbga.css';

const viewBox = {"width":14,"height":4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1vsmrbga"/>`,
		"fallback": "formkit:range",
	});
}

export default Component;
