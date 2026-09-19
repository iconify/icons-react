import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9b-07nxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a9b-07nxn"/>`,
		"fallback": "bitcoin-icons:lightning-circle-filled",
	});
}

export default Component;
