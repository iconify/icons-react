import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_c4xabtr.css';
import '../../css/t/t9axjb05q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_c4xabtr"/><path class="t9axjb05q"/>`,
		"fallback": "carbon:part-definition",
	});
}

export default Component;
