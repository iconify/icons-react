import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evy59lnwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evy59lnwg"/>`,
		"fallback": "coolicons:panel-right-close-fill-round",
	});
}

export default Component;
