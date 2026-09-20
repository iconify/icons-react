import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wone3cgvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wone3cgvk"/>`,
		"fallback": "stash:square-check-solid",
	});
}

export default Component;
