import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2v60eklz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2v60eklz"/>`,
		"fallback": "streamline:interface-arrows-button-zigzag-both-direction-arrow-curvy-diagram-zigzag-vertical",
	});
}

export default Component;
