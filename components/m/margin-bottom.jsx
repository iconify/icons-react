import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeo5pg9kl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeo5pg9kl"/>`,
		"fallback": "vaadin:margin-bottom",
	});
}

export default Component;
