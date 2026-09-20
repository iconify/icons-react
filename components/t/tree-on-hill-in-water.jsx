import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz4so0yad.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz4so0yad"/>`,
		"fallback": "pinhead:tree-on-hill-in-water",
	});
}

export default Component;
