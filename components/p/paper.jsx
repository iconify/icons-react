import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doooacb1b.css';

const viewBox = {"width":39,"height":39};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doooacb1b"/>`,
		"fallback": "thesvg-color:paper",
	});
}

export default Component;
