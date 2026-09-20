import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf2sjkbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf2sjkbaz"/>`,
		"fallback": "simple-icons:namebase",
	});
}

export default Component;
