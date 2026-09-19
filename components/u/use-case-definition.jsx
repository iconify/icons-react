import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfakmmxec.css';
import '../../css/t/t9axjb05q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfakmmxec"/><path class="t9axjb05q"/>`,
		"fallback": "carbon:use-case-definition",
	});
}

export default Component;
