import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkmvasb9v.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkmvasb9v"/>`,
		"fallback": "marketeq:stop",
	});
}

export default Component;
