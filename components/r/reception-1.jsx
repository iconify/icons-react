import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh_4jt-7q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh_4jt-7q"/>`,
		"fallback": "bi:reception-1",
	});
}

export default Component;
