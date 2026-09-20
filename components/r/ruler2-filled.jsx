import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai88b7bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai88b7bjh"/>`,
		"fallback": "reicon:ruler2-filled",
	});
}

export default Component;
