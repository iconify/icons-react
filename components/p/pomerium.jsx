import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlv2fmbfj.css';
import '../../css/u/u1l779tda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlv2fmbfj"/><path class="u1l779tda"/>`,
		"fallback": "selfhst:pomerium",
	});
}

export default Component;
