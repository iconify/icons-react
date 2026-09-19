import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjvwm7b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjvwm7b-d"/>`,
		"fallback": "iconamoon:scanner",
	});
}

export default Component;
