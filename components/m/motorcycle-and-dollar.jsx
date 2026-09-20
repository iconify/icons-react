import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq0mikcbl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq0mikcbl"/>`,
		"fallback": "pinhead:motorcycle-and-dollar",
	});
}

export default Component;
