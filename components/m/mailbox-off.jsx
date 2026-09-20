import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt6741bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt6741bkw"/>`,
		"fallback": "tabler:mailbox-off",
	});
}

export default Component;
