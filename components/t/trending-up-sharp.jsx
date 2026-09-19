import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0daysu1p.css';
import '../../css/q/qnkrgpaud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0daysu1p"/><path class="qnkrgpaud"/>`,
		"fallback": "famicons:trending-up-sharp",
	});
}

export default Component;
