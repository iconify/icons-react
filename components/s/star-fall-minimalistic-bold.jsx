import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wahoyrbda.css';
import '../../css/p/pvm_5qbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wahoyrbda"/><path clip-rule="evenodd" class="pvm_5qbwg"/>`,
		"fallback": "solar:star-fall-minimalistic-bold",
	});
}

export default Component;
