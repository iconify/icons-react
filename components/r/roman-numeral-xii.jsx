import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh22y12ri.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh22y12ri"/>`,
		"fallback": "pinhead:roman-numeral-xii",
	});
}

export default Component;
