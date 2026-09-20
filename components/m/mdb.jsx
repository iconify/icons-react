import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pna77acaz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pna77acaz"/>`,
		"fallback": "la:mdb",
	});
}

export default Component;
