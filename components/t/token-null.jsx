import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oya1jhbbd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oya1jhbbd"/>`,
		"fallback": "oui:token-null",
	});
}

export default Component;
