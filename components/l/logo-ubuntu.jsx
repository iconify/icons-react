import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiwcx9z6c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uiwcx9z6c"/>`,
		"fallback": "gravity-ui:logo-ubuntu",
	});
}

export default Component;
