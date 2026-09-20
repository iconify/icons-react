import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnk8b_buc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnk8b_buc"/>`,
		"fallback": "tabler:message-circle-2",
	});
}

export default Component;
