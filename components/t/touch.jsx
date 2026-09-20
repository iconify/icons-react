import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5nf1or0c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5nf1or0c"/>`,
		"fallback": "picon:touch",
	});
}

export default Component;
