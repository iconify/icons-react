import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfm5imxge.css';
import '../../css/i/i27ssqklb.css';
import '../../css/c/ce5djubef.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfm5imxge"/><path class="i27ssqklb"/><path class="ce5djubef"/>`,
		"fallback": "famicons:trash-sharp",
	});
}

export default Component;
