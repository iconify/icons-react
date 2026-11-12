import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co8fiztgb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co8fiztgb"/>`,
		"fallback": "selfhst:navy-federal-credit-union",
	});
}

export default Component;
