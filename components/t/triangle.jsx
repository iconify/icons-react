import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk2g5blwg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk2g5blwg"/>`,
		"fallback": "bi:triangle",
	});
}

export default Component;
