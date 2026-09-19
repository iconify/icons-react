import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7uhcbces.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7uhcbces"/>`,
		"fallback": "dinkie-icons:language-han-filled",
	});
}

export default Component;
