import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzx7ebb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzx7ebb8y"/>`,
		"fallback": "tabler:square-check-filled",
	});
}

export default Component;
