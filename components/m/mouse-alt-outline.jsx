import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iimgyyl1w.css';
import '../../css/d/dta0--2ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iimgyyl1w"/><path clip-rule="evenodd" class="dta0--2ub"/>`,
		"fallback": "basil:mouse-alt-outline",
	});
}

export default Component;
