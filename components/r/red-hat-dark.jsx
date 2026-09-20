import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oedqgxdbn.css';
import '../../css/u/uckwd9b6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oedqgxdbn"/><path class="uckwd9b6d"/>`,
		"fallback": "selfhst:red-hat-dark",
	});
}

export default Component;
