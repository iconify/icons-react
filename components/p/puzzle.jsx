import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob_t6ubko.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ob_t6ubko"/>`,
		"fallback": "gravity-ui:puzzle",
	});
}

export default Component;
