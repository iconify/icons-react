import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzfogzbxm.css';

const viewBox = {"width":59,"height":59,"left":582,"top":232.67};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzfogzbxm"/>`,
		"fallback": "thesvg-color:lumin-light",
	});
}

export default Component;
