import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5rsdac0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5rsdac0p"/>`,
		"fallback": "thesvg-color:logseq",
	});
}

export default Component;
