import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo4a1e9iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo4a1e9iw"/>`,
		"fallback": "ri:tooth-line",
	});
}

export default Component;
