import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzd0fomwq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzd0fomwq"/>`,
		"fallback": "ant-design:phone-filled",
	});
}

export default Component;
