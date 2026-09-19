import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsgj5pbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsgj5pbcl"/>`,
		"fallback": "iconoir:voice-circle",
	});
}

export default Component;
