import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_2qah0lr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_2qah0lr"/>`,
		"fallback": "ant-design:taobao-outlined",
	});
}

export default Component;
