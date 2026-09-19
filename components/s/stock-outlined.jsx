import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a21e6-ckz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a21e6-ckz"/>`,
		"fallback": "ant-design:stock-outlined",
	});
}

export default Component;
