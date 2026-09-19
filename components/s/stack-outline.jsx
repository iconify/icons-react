import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep0mwlbaf.css';
import '../../css/d/dbadl8boc.css';
import '../../css/c/c8rmpnlva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ep0mwlbaf"/><path class="dbadl8boc"/><path class="c8rmpnlva"/>`,
		"fallback": "basil:stack-outline",
	});
}

export default Component;
