import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfb0ibcol.css';
import '../../css/o/oov6ojd_g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfb0ibcol"/><path class="oov6ojd_g"/>`,
		"fallback": "lineicons:protection",
	});
}

export default Component;
