import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5doxbc5p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5doxbc5p"/>`,
		"fallback": "streamline:interface-text-formatting-indent-decrease-text-alignment-indent-paragraph-align-formatting-decrease",
	});
}

export default Component;
