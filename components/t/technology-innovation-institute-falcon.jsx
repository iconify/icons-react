import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjcnumbvg.css';
import '../../css/h/h5tf6mlqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjcnumbvg"/><path class="h5tf6mlqs"/>`,
		"fallback": "thesvg-color:technology-innovation-institute-falcon",
	});
}

export default Component;
