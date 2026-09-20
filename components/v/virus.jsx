import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk_rxnbss.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk_rxnbss"/>`,
		"fallback": "picon:virus",
	});
}

export default Component;
