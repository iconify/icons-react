import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1mc5lbfe.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1mc5lbfe"/>`,
		"fallback": "academicons:preregistered-square",
	});
}

export default Component;
