import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff8p10v1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff8p10v1a"/>`,
		"fallback": "reicon:progress-bar-filled",
	});
}

export default Component;
