import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zctrsbc9l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zctrsbc9l"/>`,
		"fallback": "gravity-ui:shield-check",
	});
}

export default Component;
