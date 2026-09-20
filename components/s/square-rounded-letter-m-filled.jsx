import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlp6wvbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlp6wvbqx"/>`,
		"fallback": "tabler:square-rounded-letter-m-filled",
	});
}

export default Component;
