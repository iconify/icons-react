import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi49o-bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi49o-bqs"/>`,
		"fallback": "tabler:tallymark-2",
	});
}

export default Component;
