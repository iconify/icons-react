import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfkzgq63l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lfkzgq63l"/>`,
		"fallback": "streamline-flex:subscription-cashflow-remix",
	});
}

export default Component;
