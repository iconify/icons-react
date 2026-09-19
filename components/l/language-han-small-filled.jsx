import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm0la9_eb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm0la9_eb"/>`,
		"fallback": "dinkie-icons:language-han-small-filled",
	});
}

export default Component;
