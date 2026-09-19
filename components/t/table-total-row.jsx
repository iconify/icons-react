import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko5bsv_0m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko5bsv_0m"/>`,
		"fallback": "fluent-mdl2:table-total-row",
	});
}

export default Component;
