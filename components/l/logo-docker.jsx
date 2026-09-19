import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lani2cc-y.css';
import '../../css/m/maksvyb5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lani2cc-y"/><path class="maksvyb5s"/>`,
		"fallback": "ion:logo-docker",
	});
}

export default Component;
