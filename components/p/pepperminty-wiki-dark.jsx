import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcmlbwbow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcmlbwbow"/>`,
		"fallback": "selfhst:pepperminty-wiki-dark",
	});
}

export default Component;
