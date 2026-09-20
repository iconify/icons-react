import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm8q8hb9g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm8q8hb9g"/>`,
		"fallback": "pinhead:phone-right-with-exclamation-point",
	});
}

export default Component;
