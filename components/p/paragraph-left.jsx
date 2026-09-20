import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyhgcdb5g.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyhgcdb5g"/>`,
		"fallback": "system-uicons:paragraph-left",
	});
}

export default Component;
