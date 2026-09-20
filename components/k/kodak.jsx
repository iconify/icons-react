import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbanokb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbanokb5x"/>`,
		"fallback": "simple-icons:kodak",
	});
}

export default Component;
