import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul-5fu98g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul-5fu98g"/>`,
		"fallback": "pinhead:stroller",
	});
}

export default Component;
