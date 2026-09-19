import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe6u85bvt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe6u85bvt"/>`,
		"fallback": "f7:triangle",
	});
}

export default Component;
