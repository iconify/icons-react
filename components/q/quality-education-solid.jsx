import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kglg-tb-c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kglg-tb-c"/>`,
		"fallback": "streamline:quality-education-solid",
	});
}

export default Component;
