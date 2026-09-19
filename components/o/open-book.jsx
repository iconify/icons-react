import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbu6h1ink.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbu6h1ink"/>`,
		"fallback": "dinkie-icons:open-book",
	});
}

export default Component;
