import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xotu9nmgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xotu9nmgv"/>`,
		"fallback": "withicons:scan-text-gloss",
	});
}

export default Component;
