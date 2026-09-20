import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfmeiob-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfmeiob-u"/>`,
		"fallback": "simple-icons:org",
	});
}

export default Component;
