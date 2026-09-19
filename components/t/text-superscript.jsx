import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdzs-wbzu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdzs-wbzu"/>`,
		"fallback": "carbon:text-superscript",
	});
}

export default Component;
