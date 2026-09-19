import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poaev4p8i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poaev4p8i"/>`,
		"fallback": "cil:list-filter",
	});
}

export default Component;
