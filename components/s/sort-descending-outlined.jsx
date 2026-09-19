import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo1bv0flp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo1bv0flp"/>`,
		"fallback": "ant-design:sort-descending-outlined",
	});
}

export default Component;
