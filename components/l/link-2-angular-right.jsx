import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3irtcyzq.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3irtcyzq"/>`,
		"fallback": "lineicons:link-2-angular-right",
	});
}

export default Component;
