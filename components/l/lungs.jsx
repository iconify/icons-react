import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adlce5bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adlce5bls"/>`,
		"fallback": "noviair-light:lungs",
	});
}

export default Component;
