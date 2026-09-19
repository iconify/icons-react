import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp6h71bvo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp6h71bvo"/>`,
		"fallback": "fa7-solid:pump-soap",
	});
}

export default Component;
