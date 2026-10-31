import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtvf1bb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtvf1bb1t"/>`,
		"fallback": "coolicons:more-grid-small-fill-round",
	});
}

export default Component;
