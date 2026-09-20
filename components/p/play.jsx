import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3124ccsd.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a3124ccsd"/>`,
		"fallback": "lineicons:play",
	});
}

export default Component;
