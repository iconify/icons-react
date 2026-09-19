import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpxz60bqe.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpxz60bqe"/>`,
		"fallback": "ant-design:radius-bottomright",
	});
}

export default Component;
