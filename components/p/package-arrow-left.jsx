import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv8-pwlcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv8-pwlcs"/>`,
		"fallback": "keyline-icons:package-arrow-left",
	});
}

export default Component;
