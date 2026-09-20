import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2rb7ob_k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2rb7ob_k"/>`,
		"fallback": "pinhead:station-wagon-under-wrench",
	});
}

export default Component;
