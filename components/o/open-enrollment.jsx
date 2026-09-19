import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enlged6oa.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enlged6oa"/>`,
		"fallback": "fluent-mdl2:open-enrollment",
	});
}

export default Component;
