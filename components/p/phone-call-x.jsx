import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufyg730bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufyg730bn"/>`,
		"fallback": "noviair:phone-call-x",
	});
}

export default Component;
