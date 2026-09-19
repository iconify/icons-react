import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiy0qre4g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiy0qre4g"/>`,
		"fallback": "devicon-plain:jetpackcompose",
	});
}

export default Component;
