import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5-xe2bei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5-xe2bei"/>`,
		"fallback": "selfhst:transmute-light",
	});
}

export default Component;
