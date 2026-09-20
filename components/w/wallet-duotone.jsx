import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfvuet28o.css';
import '../../css/g/g452hhy9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qfvuet28o"/><path class="g452hhy9a"/></g>`,
		"fallback": "si:wallet-duotone",
	});
}

export default Component;
