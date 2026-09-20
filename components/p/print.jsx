import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbsaxbc2m.css';
import '../../css/k/k7cxakrzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbsaxbc2m"/><path class="k7cxakrzv"/>`,
		"fallback": "prime:print",
	});
}

export default Component;
