import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu1_c1gnp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu1_c1gnp"/>`,
		"fallback": "academicons:open-access-square",
	});
}

export default Component;
