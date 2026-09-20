import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lld8wpyib.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lld8wpyib"/>`,
		"fallback": "la:passport",
	});
}

export default Component;
