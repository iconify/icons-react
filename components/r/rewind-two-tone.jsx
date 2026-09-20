import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v85bn7bst.css';
import '../../css/a/a01qzhb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v85bn7bst"/><path class="a01qzhb9v"/></g>`,
		"fallback": "keyline-icons:rewind-two-tone",
	});
}

export default Component;
