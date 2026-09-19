import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9nifcugj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t9nifcugj"/>`,
		"fallback": "gravity-ui:pin-slash",
	});
}

export default Component;
