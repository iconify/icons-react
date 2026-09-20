import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsbfe76of.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsbfe76of"/>`,
		"fallback": "ooui:user-avatar-outline",
	});
}

export default Component;
