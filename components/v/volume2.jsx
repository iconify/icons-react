import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tarltcb7p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tarltcb7p"/>`,
		"fallback": "raphael:volume2",
	});
}

export default Component;
