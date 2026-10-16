import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqamdbc7e.css';
import '../../css/n/nmg5wwk4w.css';

const viewBox = {"width":144,"height":144};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqamdbc7e"/><path class="nmg5wwk4w"/>`,
		"fallback": "thesvg-color:kanboard",
	});
}

export default Component;
