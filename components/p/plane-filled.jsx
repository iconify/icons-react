import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woc2qorbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woc2qorbn"/>`,
		"fallback": "tabler:plane-filled",
	});
}

export default Component;
