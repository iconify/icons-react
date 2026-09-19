import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4_uvrykv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4_uvrykv"/>`,
		"fallback": "ant-design:link-outlined",
	});
}

export default Component;
