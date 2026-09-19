import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edlr2ix5k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edlr2ix5k"/>`,
		"fallback": "icomoon-free:mail3",
	});
}

export default Component;
