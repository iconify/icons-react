import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6gfr1fqq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6gfr1fqq"/>`,
		"fallback": "ant-design:scissor-outlined",
	});
}

export default Component;
