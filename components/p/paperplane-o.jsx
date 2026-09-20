import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_jdxtbgw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_jdxtbgw"/>`,
		"fallback": "vaadin:paperplane-o",
	});
}

export default Component;
