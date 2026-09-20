import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er16xtb5v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er16xtb5v"/>`,
		"fallback": "streamline:paintbrush-1",
	});
}

export default Component;
