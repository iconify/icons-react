import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a668dr9wo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a668dr9wo"/>`,
		"fallback": "devicon-plain:jquery",
	});
}

export default Component;
