import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el-y0jbtg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el-y0jbtg"/>`,
		"fallback": "fa7-solid:map-pin",
	});
}

export default Component;
