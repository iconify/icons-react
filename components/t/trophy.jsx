import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzjyi_b5b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzjyi_b5b"/>`,
		"fallback": "bi:trophy",
	});
}

export default Component;
