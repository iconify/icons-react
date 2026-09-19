import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_qscfbju.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_qscfbju"/>`,
		"fallback": "fa7-regular:laugh-beam",
	});
}

export default Component;
