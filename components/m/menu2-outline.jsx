import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcumv1bkw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcumv1bkw"/>`,
		"fallback": "lsicon:menu2-outline",
	});
}

export default Component;
