import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kywr9abkh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kywr9abkh"/>`,
		"fallback": "dinkie-icons:link-symbol-small",
	});
}

export default Component;
