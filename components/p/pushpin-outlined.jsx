import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6ftoevsq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6ftoevsq"/>`,
		"fallback": "ant-design:pushpin-outlined",
	});
}

export default Component;
