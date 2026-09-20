import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjgf_ubeh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjgf_ubeh"/>`,
		"fallback": "picon:perl",
	});
}

export default Component;
