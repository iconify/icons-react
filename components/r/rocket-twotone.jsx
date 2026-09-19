import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd26ri4fm.css';
import '../../css/v/vn40uv8sr.css';
import '../../css/s/ssu0d0bti.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd26ri4fm"/><path class="vn40uv8sr"/><path class="ssu0d0bti"/>`,
		"fallback": "ant-design:rocket-twotone",
	});
}

export default Component;
