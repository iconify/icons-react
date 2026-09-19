import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smljgrb6r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smljgrb6r"/>`,
		"fallback": "ant-design:search-outlined",
	});
}

export default Component;
