import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld1eu9b_f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld1eu9b_f"/>`,
		"fallback": "pinhead:semi-trailer-with-bolt",
	});
}

export default Component;
