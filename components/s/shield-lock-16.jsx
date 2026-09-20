import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrw6ywbyh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrw6ywbyh"/>`,
		"fallback": "octicon:shield-lock-16",
	});
}

export default Component;
