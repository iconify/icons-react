import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgpxnbb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgpxnbb2z"/>`,
		"fallback": "thesvg-color:paddy-power",
	});
}

export default Component;
