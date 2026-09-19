import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpdw78y7c.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpdw78y7c"/>`,
		"fallback": "zmdi:money-box",
	});
}

export default Component;
