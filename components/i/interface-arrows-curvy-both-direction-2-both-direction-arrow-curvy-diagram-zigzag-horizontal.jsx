import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyo64f5ox.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyo64f5ox"/>`,
		"fallback": "streamline:interface-arrows-curvy-both-direction-2-both-direction-arrow-curvy-diagram-zigzag-horizontal",
	});
}

export default Component;
