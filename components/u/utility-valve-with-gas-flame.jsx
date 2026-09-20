import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gogk23mvb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gogk23mvb"/>`,
		"fallback": "pinhead:utility-valve-with-gas-flame",
	});
}

export default Component;
