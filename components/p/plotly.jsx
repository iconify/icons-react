import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot9egiipf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot9egiipf"/>`,
		"fallback": "devicon-plain:plotly",
	});
}

export default Component;
