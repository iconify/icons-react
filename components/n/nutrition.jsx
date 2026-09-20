import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn-i8lbtr.css';
import '../../css/r/r5r-9rbtq.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn-i8lbtr"/><path class="r5r-9rbtq"/>`,
		"fallback": "medical-icon:nutrition",
	});
}

export default Component;
