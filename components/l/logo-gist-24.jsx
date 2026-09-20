import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueozdva-h.css';

const viewBox = {"width":38,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueozdva-h"/>`,
		"fallback": "octicon:logo-gist-24",
	});
}

export default Component;
