import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhslh1nsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhslh1nsv"/>`,
		"fallback": "tabler:rotate-2",
	});
}

export default Component;
