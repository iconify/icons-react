import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7arko27i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7arko27i"/>`,
		"fallback": "gravity-ui:pin-slash-fill",
	});
}

export default Component;
