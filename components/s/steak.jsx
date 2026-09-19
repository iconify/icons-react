import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3mncd9ks.css';

const viewBox = {"width":1026,"height":1028};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3mncd9ks"/>`,
		"fallback": "whh:steak",
	});
}

export default Component;
