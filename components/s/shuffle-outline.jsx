import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgk67bbts.css';
import '../../css/i/ixe8k5-3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgk67bbts"/><path class="ixe8k5-3j"/>`,
		"fallback": "basil:shuffle-outline",
	});
}

export default Component;
