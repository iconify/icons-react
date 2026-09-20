import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aej8fvbtn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aej8fvbtn"/>`,
		"fallback": "pinhead:roman-numeral-iv",
	});
}

export default Component;
