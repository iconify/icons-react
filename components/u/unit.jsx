import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irb-tcb5g.css';
import '../../css/k/kt2e20byv.css';

const viewBox = {"width":23.3,"height":25.7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irb-tcb5g"/><path class="kt2e20byv"/>`,
		"fallback": "formkit:unit",
	});
}

export default Component;
