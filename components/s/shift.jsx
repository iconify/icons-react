import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plii2cbwg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plii2cbwg"/>`,
		"fallback": "bi:shift",
	});
}

export default Component;
