import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q14syjb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q14syjb8a"/>`,
		"fallback": "keyline-icons:panel-left-close-sharp-fill",
	});
}

export default Component;
