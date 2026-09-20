import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzkydabfw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzkydabfw"/>`,
		"fallback": "octicon:unlock-16",
	});
}

export default Component;
