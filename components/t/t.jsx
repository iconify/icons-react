import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phfr-hjhp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phfr-hjhp"/>`,
		"fallback": "pinhead:t",
	});
}

export default Component;
