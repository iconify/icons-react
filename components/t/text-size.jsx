import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czbr_75eh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czbr_75eh"/>`,
		"fallback": "andrsrxn:text-size",
	});
}

export default Component;
