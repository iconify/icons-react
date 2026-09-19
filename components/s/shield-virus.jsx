import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm2r5tcxu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm2r5tcxu"/>`,
		"fallback": "fa7-solid:shield-virus",
	});
}

export default Component;
