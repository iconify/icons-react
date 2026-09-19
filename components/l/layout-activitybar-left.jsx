import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz59rmb8x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz59rmb8x"/>`,
		"fallback": "codicon:layout-activitybar-left",
	});
}

export default Component;
