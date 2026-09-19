import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4lu-wbzu.css';

const viewBox = {"width":384,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4lu-wbzu"/>`,
		"fallback": "ps:kik",
	});
}

export default Component;
