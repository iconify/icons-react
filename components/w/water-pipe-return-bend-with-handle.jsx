import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isaurbc7j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isaurbc7j"/>`,
		"fallback": "pinhead:water-pipe-return-bend-with-handle",
	});
}

export default Component;
