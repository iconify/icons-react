import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4te_bdvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4te_bdvn"/>`,
		"fallback": "tabler:square-rounded-x-filled",
	});
}

export default Component;
