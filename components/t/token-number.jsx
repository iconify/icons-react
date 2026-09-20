import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-t8zubqu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-t8zubqu"/>`,
		"fallback": "oui:token-number",
	});
}

export default Component;
