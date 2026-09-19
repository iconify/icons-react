import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k413-ia3f.css';

const viewBox = {"width":520,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k413-ia3f"/>`,
		"fallback": "ps:piggy-bank-coins",
	});
}

export default Component;
