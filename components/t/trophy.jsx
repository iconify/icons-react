import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he_-2_omg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he_-2_omg"/>`,
		"fallback": "vaadin:trophy",
	});
}

export default Component;
