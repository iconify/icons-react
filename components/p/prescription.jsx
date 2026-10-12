import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st8y9r6ap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st8y9r6ap"/>`,
		"fallback": "andrsrxn:prescription",
	});
}

export default Component;
