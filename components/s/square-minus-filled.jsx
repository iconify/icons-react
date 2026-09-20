import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pht7-hqwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pht7-hqwv"/>`,
		"fallback": "tabler:square-minus-filled",
	});
}

export default Component;
