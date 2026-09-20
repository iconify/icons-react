import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neqtoyb0j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neqtoyb0j"/>`,
		"fallback": "pinhead:lion",
	});
}

export default Component;
